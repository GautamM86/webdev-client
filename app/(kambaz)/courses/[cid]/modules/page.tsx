"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import * as client from "../../client";
import { useModulesStore } from "../../../store/modulesStore";
export default function Modules() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const modules = useModulesStore((state) => state.modules);
  const setModules = useModulesStore((state) => state.setModules);
  useEffect(() => {
    const load = async () => {
      setModules(await client.findModulesForCourse(courseId));
    };
    load();
  }, [courseId, setModules]);
  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module key={module._id} module={module} />
        ))}
      </ul>
    </div>
  );
}