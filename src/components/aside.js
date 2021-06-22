import React from 'react'
import { Steps } from 'antd';
import './aside.css'


const { Step } = Steps;

export default function Aside() {
    return (
        <Steps direction="vertical" size="small" current={1} className='aside'>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
        </Steps>
    )
}