"use client";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Collapse, theme } from "antd";
import Title from "./shared/Title";

const Faq = () => {
  const getItems = (panelStyle: any) => [
    {
      key: "1",
      label: <p className="text-[16px] font-medium">How do I use the cubes?</p>,
      children: (
        <div>
          <p>
            Our frozen baby food cubes are designed to make mealtime simple and
            stress-free. Just pop out the desired number of cubes and:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Thaw in the fridge: Let them thaw in the refrigerator for a few
              hours or overnight.
            </li>
            <li>
              Warm up: You can gently warm the cubes on the stovetop or
              microwave until they reach the desired temperature. Be sure to
              stir and check for hot spots before serving.
            </li>
            <li>
              Mix and match: Feel free to combine different cubes for varied and
              balanced meals.
            </li>
          </ul>
        </div>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: (
        <p className="text-[16px] font-medium">
          Are the products allergen-free?
        </p>
      ),
      children: (
        <p>
          We prioritize using simple, whole ingredients in our cubes, and we
          take care to avoid common allergens. However, we recommend checking
          the ingredient lists carefully for any potential sensitivities. If you
          have specific concerns, please reach out to us directly for more
          information about allergens.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "3",
      label: (
        <p className="text-[16px] font-medium">
          Where do you source your ingredients?
        </p>
      ),
      children: (
        <p>
          At Cove Valley, we source our ingredients from trusted, certified
          organic farms. We work closely with local and sustainable farmers to
          ensure our fruits and vegetables are grown without pesticides or
          harmful chemicals. Our farm-to-table approach ensures that your baby
          gets the freshest, most nutritious produce available.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "4",
      label: (
        <p className="text-[16px] font-medium">
          What makes frozen baby food better?
        </p>
      ),
      children: (
        <p>
          Freezing is a natural way to preserve the nutrients, flavour, and
          freshness of our organic ingredients. We flash-freeze our purees at
          peak freshness, locking in essential vitamins and minerals without the
          need for preservatives. This ensures that your baby is getting
          wholesome, nutrient-dense food in every cube.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "5",
      label: (
        <p className="text-[16px] font-medium">
          How long can I store the cubes?
        </p>
      ),
      children: (
        <p>
          Our baby food cubes can be stored in the freezer for up to 3 months.
          To ensure the best taste and quality, we recommend using them within
          this timeframe.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "6",
      label: (
        <p className="text-[16px] font-medium">
          How many cubes should I use per meal?
        </p>
      ),
      children: (
        <p>
          Each cube is perfectly portioned for convenience. For younger babies,
          you may only need one or two cubes per meal, while older babies with
          larger appetites may require more. You can easily adjust based on your
          baby’s needs.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "7",
      label: (
        <p className="text-[16px] font-medium">
          Do your cubes contain any additives or preservatives?
        </p>
      ),
      children: (
        <p>
          No, our cubes are made from only a few simple, organic ingredients. We
          never use additives, preservatives, or fillers, so you can feel
          confident that your baby is getting pure, wholesome food.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "8",
      label: (
        <p className="text-[16px] font-medium">Are your products organic?</p>
      ),
      children: (
        <p>
          Yes, all of our ingredients are organic, ensuring that every cube is
          free from harmful chemicals.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "9",
      label: (
        <p className="text-[16px] font-medium">
          Can I mix the cubes with other foods?
        </p>
      ),
      children: (
        <p>
          Absolutely! You can easily mix our cubes with other foods like
          oatmeal, yogurt, or grains to create a balanced and varied meal for
          your baby.
        </p>
      ),
      style: panelStyle,
    },
  ];

  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 12,
    border: "1px solid #28948D",
    borderRadius: 8,
  };

  return (
    <div className="container">
      <Title
        title="Frequently Asked Questions"
        subtitle="Find answers to the most common questions about our baby food products"
      />
      <div className="mt-8">
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <div className="border rounded-full border-primary">
              <MdKeyboardArrowRight
                color="#28948D"
                size={22}
                className={`${isActive ? "rotate-90" : "rotate-0"}`}
              />
            </div>
          )}
          expandIconPosition="end"
          style={{
            background: token.colorBgContainer,
          }}
          items={getItems(panelStyle)}
        />
      </div>
    </div>
  );
};

export default Faq;
