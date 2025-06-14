"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Mail size={20} />,
		href: "mailto:dev@chronark.com",
		label: "指导老师邮箱",
		handle: "yinyan@vma.edu.cn",
	},
];

export default function Example() {
	return (
		<div className="bg-transparent animate-fade-in">
			<Navigation />

			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto space-x-16">
				{/* 项目简介文字 */}
				<section className="max-w-md">
					<h2 className="mb-4 text-3xl font-bold font-display animate-bw-gradient-float">
						项目简介
					</h2>
					<p className="leading-relaxed text-lg animate-bw-gradient-float-delay whitespace-pre-wrap">
						本项目以盐田区的海岸资源和海滨栈道为主题，结合实地考察、地理数据分析及AI技术，探索盐田海岸的地貌类型、成因、变化趋势及人类活动的影响。我们通过实地考察收集数据，利用Google My Maps和Excel等工具制作交互式地图和气候图表，学习地貌演变原理并使用GIS系统分析海岸变化。此外，我们还将使用AI技术训练地貌分类模型，通过Teachable Machine进行分类，利用Remini修复历史照片，最终将成果整合到Google Sites搭建的数字导览系统中
					</p>
				</section>

				{/* 邮箱卡片 */}
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
					{socials.map((s) => (
						<Card key={s.handle} className="animate-card-pop">
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>

			<style jsx>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fade-in {
					animation: fadeIn 1s ease forwards;
				}
				@keyframes bwGradientShift {
					0% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
					100% {
						background-position: 0% 50%;
					}
				}
				@keyframes floatUpDown {
					0%,
					100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-6px);
					}
				}
				.animate-bw-gradient-float {
					background: linear-gradient(270deg, #f0f0f0, #b0b0b0, #d0d0d0, #f0f0f0);
					background-size: 600% 600%;
					animation: bwGradientShift 8s ease infinite, floatUpDown 3s ease-in-out infinite;
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					display: inline-block;
					font-weight: 700;
				}
				.animate-bw-gradient-float-delay {
					background: linear-gradient(270deg, #b0b0b0, #f0f0f0, #d0d0d0, #b0b0b0);
					background-size: 600% 600%;
					animation: bwGradientShift 8s ease infinite 2s,
						floatUpDown 3s ease-in-out infinite 1s;
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					display: inline-block;
				}
				@keyframes cardPop {
					0% {
						opacity: 0;
						transform: scale(0.85);
					}
					100% {
						opacity: 1;
						transform: scale(1);
					}
				}
				.animate-card-pop {
					animation: cardPop 0.6s ease forwards;
				}
			`}</style>
		</div>
	);
}
