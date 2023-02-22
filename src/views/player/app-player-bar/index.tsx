import React, { memo, useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import type { ReactNode, FC } from 'react'
import { Slider } from 'antd'
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerBarWrapper
} from './style'
import { useAppSelector } from '@/store'
import { getPlayerUrl } from '@/utils/handle-player'
import { formatTime } from '@/utils/format'
interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  /** 定义组件内部的数据 */
  const [isPlaying, setIsPlaying] = useState(false)
  const [progrss, setProgress] = useState(0) // 播放进度条进度
  const [duration, setDuration] = useState(0) // 歌曲总时长
  const [currentTime, setCurrentTime] = useState(0) // 时间进度
  const audioRef = useRef<HTMLAudioElement>(null)

  const { currentSong } = useAppSelector((state) => ({
    currentSong: state.player.currentSong
  }))

  /** 监听currentSong的变化 */
  useEffect(() => {
    ;(async () => {
      if (!audioRef.current) return
      const { data } = await getPlayerUrl(currentSong.id)
      audioRef.current.src = data?.[0]?.url
      setDuration(currentSong.dt)
    })()
  }, [])

  /** 播放功能的交互 */
  function handlePlayBtnClick() {
    if (audioRef.current!.paused) {
      audioRef
        .current!.play()
        .then(() => {
          console.log('播放成功')
          setIsPlaying(true)
        })
        .catch((err) => {
          console.log('播放失败:', err)
          setIsPlaying(false)
        })
    } else {
      const isPaused = audioRef.current!.paused
      isPaused
        ? audioRef.current?.play().catch(() => setIsPlaying(false))
        : audioRef.current?.pause()
      setIsPlaying(isPaused)
    }
  }
  /** 播放中 */
  function handleTimeUpdate() {
    // 1.获取当前播放时间
    const currentTime = audioRef.current!.currentTime * 1000
    const progress = (currentTime / duration) * 100
    setProgress(progress)
    setCurrentTime(currentTime)
  }
  /** 播放结束 */
  function handlePlayEnded() {
    setIsPlaying(false)
  }
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev"></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img className="image" src={currentSong?.al?.picUrl} alt="" />
          </Link>
          <div className="info">
            <div className="song">
              <div className="songName">{currentSong.name}</div>
              <div style={{ marginLeft: '10px' }}>
                {currentSong?.ar[0]?.name}
              </div>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                tooltip={{ formatter: null }}
                className="ant-slider"
                value={progrss}
              ></Slider>
              <div className="time">
                <div className="current">{formatTime(currentTime)}</div>
                <div className="divider">/</div>
                <div className="duration">{formatTime(duration)}</div>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
          <audio
            ref={audioRef}
            onEnded={handlePlayEnded}
            onTimeUpdate={handleTimeUpdate}
          />
        </BarOperator>
      </div>
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
