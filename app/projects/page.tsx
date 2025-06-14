"use client";

import React, { useEffect, useState } from "react";
import { Navigation } from "../components/nav";
import * as tmImage from "@teachablemachine/image";

export const revalidate = 60;

// 主标题样式组件（h1）
function MainTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @keyframes mainTitleGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <h1
        tabIndex={-1}
        className="
          font-extrabold
          tracking-tight
          text-5xl sm:text-6xl
          select-none
          outline-none
          focus-visible:ring-4 focus-visible:ring-white
          focus-visible:underline
          transition
          duration-1000
        "
        style={{
          background:
            "linear-gradient(270deg, #f9fafb, #d1d5db, #f3f4f6, #e5e7eb, #f9fafb)",
          backgroundSize: "600% 600%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "mainTitleGradient 10s ease infinite",
          textShadow:
            "0 0 10px rgba(255,255,255,0.6), 0 0 15px rgba(255,255,255,0.3)",
          userSelect: "none",
        }}
      >
        {children}
      </h1>
    </>
  );
}

// 副标题样式组件（h2）
function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @keyframes subTitleGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <h2
        className="
          font-semibold
          text-3xl sm:text-4xl
          mb-4
          select-none
          transition
          duration-800
          text-gray-300
          "
        style={{
          background:
            "linear-gradient(270deg, #a1a1aa, #71717a, #a1a1aa, #52525b, #a1a1aa)",
          backgroundSize: "500% 500%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "subTitleGradient 12s ease infinite",
          textShadow: "0 0 6px rgba(255,255,255,0.2)",
          userSelect: "none",
        }}
      >
        {children}
      </h2>
    </>
  );
}

// 按钮风格文字（可点击）
function ClickableText({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <>
      <style>{`
        @keyframes bwGradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <span
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        className="
          cursor-pointer
          select-none
          outline-none
          transition
          focus-visible:ring-2
          focus-visible:ring-white
          focus-visible:underline
          inline-block
        "
        style={{
          fontWeight: 700,
          fontSize: "1.25rem",
          background:
            "linear-gradient(270deg, #f0f0f0, #b0b0b0, #d0d0d0, #f0f0f0)",
          backgroundSize: "600% 600%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "bwGradientShift 6s ease infinite",
          userSelect: "none",
          transition: "filter 0.3s ease",
          filter: "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget.style as any).filter =
            "drop-shadow(0 0 6px rgba(255,255,255,0.8))";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget.style as any).filter = "none";
        }}
      >
        {children}
      </span>
    </>
  );
}

// 说明文本，细微动画和阴影，次要文字
function DescriptionText({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-gray-400 max-w-prose select-text"
      style={{
        textShadow: "0 0 3px rgba(0,0,0,0.3)",
        transition: "color 0.3s ease",
        userSelect: "text",
      }}
    >
      {children}
    </p>
  );
}

export default function ProjectsPage() {
  const [loaded, setLoaded] = useState(false);
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);
  const [predictions, setPredictions] = useState<tmImage.Prediction[] | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    async function loadModel() {
      try {
        const loadedModel = await tmImage.load("/ml/model.json", "/ml/metadata.json");
        setModel(loadedModel);
      } catch (error) {
        console.error("加载模型失败", error);
      }
    }
    loadModel();
  }, []);

  async function predictImage(image: HTMLImageElement) {
    if (!model) return;
    try {
      const preds = await model.predict(image);
      const sortedPreds = preds.sort((a, b) => b.probability - a.probability);
      setPredictions(sortedPreds);
    } catch (e) {
      console.error("图片预测错误", e);
    }
  }

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  function onClickUpload() {
    fileInputRef.current?.click();
  }

  return (
    <div
      className={`
        relative pb-16 min-h-screen bg-black
        transition-opacity transition-transform duration-700
        ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
    >
      <Navigation />
      <div className="px-6 pt-20 mx-auto max-w-7xl lg:px-8 space-y-16 md:pt-24 lg:pt-32">
        <MainTitle>我们的成果</MainTitle>

        {/* Google Maps */}
        <section
          className={`
            transition-opacity transition-transform duration-700 delay-400
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <SubTitle>大梅沙海岸线地貌植物标记</SubTitle>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1Kg8iSoU8YQfIdn4OO1n3HJi8Ine2Ihg"
            width="100%"
            height="500"
            loading="lazy"
            className="rounded-md border border-zinc-700"
            allowFullScreen
            title="大梅沙海岸线地貌植物标记地图"
          />
        </section>

        {/* 时间线 */}
        <section
          className={`
            transition-opacity transition-transform duration-700 delay-600
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <SubTitle>大梅沙海岸线历史演变时间线</SubTitle>
          <iframe
            src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vT64sZ81Z33taAZI3DaCAG8ZrbqaNAnFjsh8rmP6-KoTsDuH4-AxPZDylQBjxwwgOevPvhIX-p2UR-p&font=Default&lang=en&initial_zoom=2&width=100%25&height=650"
            width="100%"
            height="650"
            loading="lazy"
            className="rounded-md border border-zinc-700"
            title="大梅沙海岸线历史演变时间线"
          />
        </section>

        {/* 机器学习地貌识别（本地模型） */}
        <section
          className={`
            transition-opacity transition-transform duration-700 delay-800
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <SubTitle>机器学习地貌识别</SubTitle>

          {/* 点击文字触发上传 */}
          <ClickableText onClick={onClickUpload}>上传图片进行识别</ClickableText>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const img = new Image();
              img.onload = () => {
                predictImage(img);
              };
              img.src = URL.createObjectURL(file);
            }}
          />

          <br />
          <br />

          {/* 跳转文字 */}
          <ClickableText
            onClick={() =>
              window.open(
                "https://teachablemachine.withgoogle.com/models/Hm1fF35ZL/",
                "_blank"
              )
            }
          >
            访问Google Teachable Machine在线模型
          </ClickableText>

          {/* 识别结果展示 */}
          {predictions && (
            <div className="mt-6 space-y-2">
              {predictions.map(({ className, probability }) => (
                <DescriptionText key={className}>
                  {className}：{(probability * 100).toFixed(2)}%
                </DescriptionText>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
