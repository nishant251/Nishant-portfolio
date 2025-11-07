"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItemsRow } from "@/components/ToolboxItemsRow";
import { motion } from "framer-motion";
import { useRef } from "react";
import { toolBoxItems } from "../../profile.config";

export const AboutSection = ({ id }: { id: string }) => {
    const constraintRef = useRef(null);

    return (
        <div className="py-20 md:py-14 lg:py-20 lg:mt-3">
            <section className="container" id={id}>
                <SectionHeader
                    heading1="About Me"
                    heading2="Nishant Srivastava"
                    paragraph="Passionate developer crafting digital experiences with modern technologies."
                />
                <div className="mt-20 flex flex-col gap-8">
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
                        <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-3">
                            <CardHeader
                                heading="My Toolbox"
                                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                                className="p-6 pb-0 lg:-mt-0.5 flex  items-center"
                            />
                            <ToolboxItemsRow
                                items={toolBoxItems}
                                className="mt-4 md:mt-6"
                                itemsWrapperClassName="animate-scroll-left [animation-duration:30s]"
                            />
                            <ToolboxItemsRow
                                items={toolBoxItems}
                                className="mt-6"
                                itemsWrapperClassName="animate-scroll-right [animation-duration:15s]"
                            />
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};
