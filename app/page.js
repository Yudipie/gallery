"use client"
import Image from "next/image";
import Project from "./components/Project/page";
import { useState } from "react";
import style from "./page.module.scss"
import Modal from "./components/modal";

export default function Home() {

  const projects = [
    {
      title: "McLaren P1",
      src: "./P1.jpg",
      color: "#000000"
    },
    {
      title: "Ford Mustang",
      src: "./ford-mustang.jpg",
      color: "#8C8C8C"
    },
    {
      title: "Pagani Utopia",
      src: "./Pagani-Utopia.jpg",
      color: "#EFE8D3"
    },
    {
      title: "Ferrari Daytona sp3",
      src: "./ferrari-daytona-sp3.jpg",
      color: "#706D63"
    }
  ]

  const [modal, setModal] = useState({active: false, index: 0})
  return (
    <>
      <div className={style.bodys}>
      {projects.map((project,index) => {
        return <Project index={index} title={project.title} setModal={setModal} key={index}/>
      })}
    </div>
    <Modal modal={modal} projects={projects}/>
    </>
  )
}
