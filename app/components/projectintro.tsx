"use client";
import { useEffect, useState } from "react";

export default function ProjectIntro() {
  const [text, setText] = useState('');
  const fullText = `本项目以盐田区的海岸资源和海滨栈道为主题，结合实地考察、地理数据分析及AI技术，探索盐田海岸的地貌类型、成因、变化趋势及人类活动的影响。我们通过实地考察收集数据，利用Google My Maps和Excel等工具制作交互式地图和气候图表，学习地貌演变原理并使用GIS系统分析海岸变化。此外，我们还将使用AI技术训练地貌分类模型，通过Teachable Machine进行分类，利用Remini修复历史照片，最终将成果整合到Google Sites搭建的数字导览系统中。`;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText((prev) => prev + fullText[i]);
      i++;
      if (i >= fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-10 md:mt-0 md:ml-16 max-w-2xl animate-fade-in text-zinc-100 text-sm md:text-base leading-relaxed">
      {text}
    </div>
  );
}
