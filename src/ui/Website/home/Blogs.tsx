import Title from "@/ui/shared/Title";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Blogs = () => {
  return (
    <div className="container my-5">
      <Title
        title="Our Blogs"
        subtitle="Discover insights, tips, and stories for a healthier lifestyle."
      />
      <div className="flex items-center justify-end my-10">
        <Link href={"/blogs"}>
          <Button
            className="group"
            iconPosition="end"
            icon={
              <GoArrowUpRight
                className="group-hover:rotate-45 duration-300"
                size={20}
              />
            }
            style={{
              height: 42,
              fontWeight: 500,
              textTransform: "uppercase",
            }}
            shape="round"
            type="primary"
          >
            See All
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item: any, index: any) => {
          return (
            <div key={index} className="rounded-md">
              <div className="relative">
                <Image
                  src="https://blog.pamperedchef.ca/wp-content/uploads/2020/05/featured-baby-food.jpg"
                  alt="Blog Post"
                  width={600} // Adjust width as necessary
                  height={400} // Adjust height as necessary
                  className="w-full h-[400px] rounded-md object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-gray-500  mb-1">August 1, 2024</p>
                <h3 className="text-2xl font-semibold mb-2">
                  5 ways to “spring clean” your health
                </h3>
                <p className="text-gray-700 mb-4">
                  There is nothing to worry about. Consequences like some
                  complications or even death. Our company states that...
                </p>
                <Link
                  href={`/blogs/${1}`}
                  className="text-primary font-medium hover:underline"
                >
                  — Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
