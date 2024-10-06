/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Heading from '@/ui/shared/Heading';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Collapse, theme } from 'antd';


const FaqClient = () => {


    const getItems = (panelStyle:any) => [
        {
            key: '1',
            label: <p className='text-[16px] text-white font-medium'>What age range is your baby food suitable for?</p>,
            children: <p className='text-white'>Our baby food is designed for infants and toddlers from 6 months to 3 years old. We offer a variety of textures and flavors to match each stage of your baby&apos;s development.</p>,
            style: panelStyle
        },
        {
            key: '2',
            label: <p className='text-[16px] text-white font-medium'>Are your products organic?</p>,
            children: <p className='text-white'>Yes, all our baby food products are made from 100% organic, non-GMO ingredients. We prioritize fresh, pesticide-free fruits, vegetables, and grains to ensure the best nutrition for your baby.</p>,
            style: panelStyle
        },
        {
            key: '3',
            label: <p className='text-[16px] text-white font-medium'>How do you ensure the safety of your baby food?</p>,
            children: <p className='text-white'>We follow strict safety protocols, including high-quality sourcing, proper hygiene, and regular lab testing for harmful substances to ensure our baby food meets the highest safety standards.</p>,
            style: panelStyle
        },
        {
            key: '4',
            label: <p className='text-[16px] text-white font-medium'>Do you offer allergy-friendly options?</p>,
            children: <p className='text-white'>Yes, we offer a range of allergy-friendly options that exclude common allergens such as dairy, nuts, and gluten. Please check the product descriptions for details on allergens.</p>,
            style: panelStyle
        },
        {
            key: '5',
            label: <p className='text-[16px] text-white font-medium'>How should I store the baby food?</p>,
            children: <p className='text-white'>Our baby food should be stored in a cool, dry place. Once opened, it should be refrigerated and consumed within 24-48 hours, depending on the product.</p>,
            style: panelStyle
        },
    ];

    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 12,
        background: "#1e412a",
        boxShadow: "none",
        borderRadius: 8,
        padding: "6px 0"
    };

    return (
        <div>
            <Heading 
                name="Frequently Asked Question" 
                style="font-bold sm:text-[32px] text-[20px] leading-[38px] sm:leading-[46px] text-[#333333] mb-4"   
            />

            <div className='mt-6'>
                <Collapse
                    
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <div className='border rounded-full border-white'>
                        <MdKeyboardArrowRight 
                            color='white' 
                            size={22} 
                            className={`${isActive ? "rotate-90" : "rotate-0"}`} 
                        />
                    </div>}
                    expandIconPosition="end"
                    style={{
                        background: token.colorBgContainer
                    }}
                    items={getItems(panelStyle)}
                />
            </div>
        </div>
    )
}

export default FaqClient