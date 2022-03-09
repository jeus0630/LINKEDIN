import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import React from 'react'

type Props = {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    text: string;
    avatar?: string;
    feed?: boolean;
}

export default function HeaderLink({ Icon, text, avatar, feed }: Props) {
    return (
        <div className={`cursor-pointer flex flex-col justify-center items-center ${feed ?
            "text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white lg:-mb-1.5 space-y1"
            : "text-gray-500 hover:text-gray-700"}`}>
            {
                avatar ? (
                    <Icon className='!h-7 !w-7 lg:!-mb-1 '></Icon>
                ) : (
                    <Icon></Icon>
                )
            }

            <h4 className='text-sm'>{text}</h4>
        </div>
    )
}