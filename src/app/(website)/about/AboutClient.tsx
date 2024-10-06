"use client";
import Heading from '@/ui/shared/Heading';
import React from 'react';


const AboutClient = () => {
    return (
        <div>
            <Heading 
                name="About" 
                style="font-bold sm:text-[32px] text-[20px] leading-[38px] sm:leading-[46px] text-[#333333] mb-4"  
            />

            <p>
                Welcome to X, your trusted partner in providing nutritious, 
                organic baby food tailored to your child&apos;s developmental needs. We understand how important it is to offer the best possible 
                start for your baby, which is why our mission is to deliver healthy, 
                high-quality meals that make feeding time stress-free for parents and delightful for little ones.
            </p>
            <br />

            <p>
                Our curated selection of baby food is crafted from 100% organic ingredients, 
                ensuring that your child gets all the essential nutrients without any harmful 
                additives or preservatives. Whether you&apos;re starting with purees for your 6-month-old or need a 
                wholesome snack for your toddler, X offers a range of options to support every stage of growth.

            </p>
            
            <br />
            <p>
                We prioritize transparency, convenience, and safety. Our products undergo rigorous testing 
                to ensure they meet the highest safety standards. Plus, with our easy-to-use web app, you can 
                browse through products, customize your orders, and choose a subscription plan that fits your 
                schedule—all from the comfort of your home.
            </p>

            <br />
            <p>
                Explore X today and discover the joy of feeding your baby healthy, delicious food that you can trust!
            </p>
        </div>
    )
}

export default AboutClient