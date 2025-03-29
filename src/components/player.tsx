'use client'
import ReactPlayer from 'react-player'
import { css } from '../../styled-system/css'
import { FC } from 'react'

interface PlayerProps {
    url: string
}

const Player: FC<PlayerProps> = ({ url }) => {
    return (
        <div
            className={css({
                display: 'flex',
                justifyContent: 'center',
                bgColor: 'card',
                rounded: '20px',
                w: '100%',
                h: '360px',
                zIndex: 1,
                maxW: {
                    xl: '540px',
                },
            })}
        >
            <ReactPlayer
                config={{
                    youtube: {
                        playerVars: { showinfo: 1 },
                    },
                }}
                playing={true}
                controls={true}
                light={true}
                url={url}
            />
        </div>
    )
}

export default Player
