import React from "react";
import { Timer, ListVideo, BookCopy, Users, PencilRuler, FileCheck, Handshake, Calendar, Medal, ClipboardCheck, Variable } from "lucide-react";

export default function Why() {
  
  const offerings = [
    {title: "Video Explanations", description: "Description 1", icon: <Timer className="flex justify-self-center w-[60px] h-[60px] text-yellow-500"/>},
    {title: "Weekly Q&A Sessions", description: "Description 2", icon: <ListVideo className="flex justify-self-center w-[60px] h-[60px] text-yellow-500"/>},
    {title: "Centralised Resource Archive", description: "Description 3", icon: <BookCopy className="flex justify-self-center w-[60px] h-[60px] text-yellow-500"/>},
    {title: "Community Forum", description: "Description 4", icon: <Users className="flex justify-self-center w-[60px] h-[60px] text-yellow-500"/>},
    {title: "Tutoring Support", description: "Description 5", icon: <PencilRuler className="flex justify-self-center w-[60px] h-[60px] text-yellow-500"/>},
    {title: "Detailed Solutions", description: "Description 6", icon: <FileCheck className="flex justify-self-center w-[60px] h-[60px] text-yellow-500"/>},
    {title: "Catered Playlists", description: "Description 7", icon: <ListVideo className="flex justify-self-center w-[60px] h-[60px] text-yellow-500"/>},
    {title: "Exclusive Quizzes", description: "Description 8", icon: <ClipboardCheck className="flex justify-self-center w-[60px] h-[60px] text-yellow-500"/>},
    {title: "Mentorship/Coaching", description: "Description 9", icon: <Handshake className="flex justify-self-center w-[60px] h-[60px] text-yellow-500"/>},
    {title: "Study Plans", description: "Description 10", icon: <Calendar className="flex justify-self-center w-[60px] h-[60px] text-yellow-500"/>},
    {title: "Relevant exam questions", description: "Description 11", icon: <Variable className="flex justify-self-center w-[60px] h-[60px] text-yellow-500"/>},
    {title: "Ranking and Benchmarking", description: "Description 12", icon: <Medal className="flex justify-self-center w-[60px] h-[60px] text-yellow-500"/>}
  ]
  return (
    <section className="min-h-screen mx-auto py-30">
      <div>
        <div className="relative mx-auto space-y-5 mb-20">
          <p className="header-text text-center">Why Choose Us?</p>
          <p className="flex justify-center paragraph-text max-w-xl text-center mx-auto">
            Stop wasting time searching for quality questions all over the place. One place, easy and questions 
                      you will actually get in your exams.</p>
        </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 mx-40 gap-x-5">
            {offerings.map((feature) => (
            <div className="space-y-3 bg-secondary rounded-2xl py-10">
              {feature.icon}
              <p className="text-center">{feature.title}</p>
              <p className="paragraph-text text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
