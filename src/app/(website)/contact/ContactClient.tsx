"use client";
import React from 'react'
import Heading from '@/ui/shared/Heading';
import { Form, Input } from 'antd';
import FormItem from "@/ui/shared/FormItem";

const ContactClient = () => {
    return (
        <div>
            <Heading 
                name="Contact Us" 
                style="font-bold uppercase text-center sm:text-[32px] text-[20px] leading-[38px] sm:leading-[46px] text-[#333333] mb-4"  
            />

            <h2 className='text-center text-[20px] leading-[38px]'>Don&apos;t hesitate to contact us! We will get back to you as soon as we can. In the meantime, we drink to your health!</h2>

            <div className='flex justify-between gap-10 mt-20'>
                <div className='w-full'>
                    <h1 className='font-semibold mb-6 text-[20px]'>CONTACT FORM</h1>

                    <Form layout='vertical' className='grid grid-cols-12 gap-x-6'>
                        <FormItem style='col-span-6' name='firstName' label='First Name'  />
                        <FormItem style='col-span-6' name='lastName' label='Last Name'  />
                        <FormItem style='col-span-6' name='email' label='Email'  />
                        <FormItem style='col-span-6' name='subject' label='Subject'  />
                        <Form.Item
                            name="message"
                            label={<p>Message</p>}
                            rules={[
                                {
                                    required: true,
                                    message: `Please Enter Message`
                                }
                            ]}
                            className='col-span-12'
                        >
                            <Input.TextArea
                                placeholder={`Enter Message`}
                                style={{
                                    width: "100%",
                                    height: 150,
                                    boxShadow: "none",
                                    outline: "none",
                                    border: "1px solid #E0E0E0",
                                    borderRadius: 6,
                                    resize: "none",
                                    background: "#FEFEFE",
                                    fontFamily: 'Poppins, sans-serif'
                                }}
                                className=' placeholder:text-[#A2A3B1] placeholder:text-[14.4px] placeholder:leading-6 font-normal'
                            />
                        </Form.Item>
                        
                        <Form.Item
                            className='col-span-12 w-full flex items-center justify-center'
                        >
                            <button 
                                type='submit'
                                className='
                                    bg-primary 
                                    border-none outline-none 
                                    shadow-none w-[200px] h-10 px-4 
                                    rounded-md text-[16px] 
                                    font-medium text-white
                                '
                            >
                                Submit
                            </button>
                        </Form.Item>
                    </Form>

                </div>
                <div className='w-fit'>
                    <h1 className='uppercase font-semibold mb-6 text-[20px]'>information&apos;s</h1>
                    <h3 className='font-bold text-[18px]'>Cove Valley</h3>
                    <p className='whitespace-nowrap'>1910, Avenue du Sanctuaire</p>
                    <p>Quebec (Quebec) G1E 3L2</p>

                    <h3 className='font-bold text-[18px] mt-6'>Telephone</h3>
                    <p>1 418 663-7477</p>
                </div>
            </div>
        </div>
    )
}

export default ContactClient