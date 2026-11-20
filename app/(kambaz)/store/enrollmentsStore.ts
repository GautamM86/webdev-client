"use client";
import { create } from "zustand";
export type Enrollment = {
  _id: string;
  user: string;
  course: string;
};
type EnrollmentsStore = {
  enrollments: Enrollment[];
  loaded: boolean;
  setEnrollments: (enrollments: Enrollment[]) => void;
};
export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
  enrollments: [],
  loaded: false,
  setEnrollments: (enrollments) => set({ enrollments, loaded: true }),
}));