"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;
export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const { theme } = useTheme();

  // 使用Intersection Observer实现懒加载
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // 当10%可见时开始加载
    );

    const cloudContainer = document.getElementById('icon-cloud-container');
    if (cloudContainer) {
      observer.observe(cloudContainer);
    }

    return () => {
      if (cloudContainer) {
        observer.unobserve(cloudContainer);
      }
    };
  }, []);

  useEffect(() => {
    if (shouldRender) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs, shouldRender]);

  const renderedIcons = useMemo(() => {
    if (!shouldRender) {
      // 懒加载状态：返回占位符
      return (
        <div 
          id="icon-cloud-container" 
          className="flex justify-center items-center w-full"
          style={{ height: '200px' }} // 占位高度
        >
          <div className="animate-pulse bg-muted rounded-full w-32 h-32" />
        </div>
      );
    }

    if (!data) {
      // 数据加载中显示骨架屏
      return Array.from({ length: iconSlugs.length }, (_, i) => (
        <div key={i} className="animate-pulse bg-muted rounded-full w-12 h-12" />
      ));
    }

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light"),
    );
  }, [data, theme, iconSlugs.length, shouldRender]);

  // 懒加载优化：仅在视口可见时渲染
  if (!shouldRender) {
    return renderedIcons;
  }

  return (
    <div id="icon-cloud-container">
      {/* @ts-ignore */}
      <Cloud {...cloudProps}>
        <>{renderedIcons}</>
      </Cloud>
    </div>
  );
}
