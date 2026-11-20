"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import * as accountClient from "../../../../account/client";
import * as coursesClient from "../../../client";
import { emptyUser, type User } from "../../../../account/AccountContext";
export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const [users, setUsers] = useState<User[]>([]);
  const [person, setPerson] = useState<User>(emptyUser);
  const loadUsers = async () => {
    setUsers(await accountClient.findUsersForCourse(courseId));
  };
  useEffect(() => {
    loadUsers();
  }, [courseId]);
  const addPerson = async () => {
    if (!person.firstName || !person.lastName) return;
    await accountClient.createUserForCourse(courseId, person);
    setPerson(emptyUser);
    await loadUsers();
  };
  const unenrollPerson = async (userId: string) => {
    await coursesClient.unenrollFromCourse(userId, courseId);
    await loadUsers();
  };
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <div id="wd-add-person-form" className="mb-4 flex flex-wrap items-center gap-2">
        <input
          placeholder="First name"
          id="wd-person-first-name"
          className="rounded border border-neutral-300 px-2 py-1 text-sm"
          value={person.firstName}
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        />
        <input
          placeholder="Last name"
          id="wd-person-last-name"
          className="rounded border border-neutral-300 px-2 py-1 text-sm"
          value={person.lastName}
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        />
        <input
          placeholder="Login ID"
          id="wd-person-login-id"
          className="rounded border border-neutral-300 px-2 py-1 text-sm"
          value={person.loginId}
          onChange={(e) => setPerson({ ...person, loginId: e.target.value })}
        />
        <input
          placeholder="Section"
          id="wd-person-section"
          className="rounded border border-neutral-300 px-2 py-1 text-sm"
          value={person.section}
          onChange={(e) => setPerson({ ...person, section: e.target.value })}
        />
        <select
          id="wd-person-role"
          className="rounded border border-neutral-300 bg-white px-2 py-1 text-sm"
          value={person.role}
          onChange={(e) => setPerson({ ...person, role: e.target.value })}
        >
          <option value="STUDENT">STUDENT</option>
          <option value="TA">TA</option>
          <option value="FACULTY">FACULTY</option>
        </select>
        <button
          type="button"
          id="wd-add-person-click"
          className="rounded bg-green-600 px-3 py-1 text-sm font-medium text-white"
          onClick={addPerson}
        >
          Add Person
        </button>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
              <td className="p-2">
                <button
                  type="button"
                  id={`wd-unenroll-person-${user._id}-click`}
                  className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
                  onClick={() => unenrollPerson(user._id)}
                >
                  Unenroll
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}