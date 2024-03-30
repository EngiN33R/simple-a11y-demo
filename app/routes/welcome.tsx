import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { Checkbox } from "~/components/Checkbox";
import { Input } from "~/components/Input";

export const meta: MetaFunction = () => {
  return [{ title: "Welcome - Onboarding" }];
};

export default function Welcome() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    company: "",
    agree: false,
  });

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div className="w-full h-full bg-slate-100 flex flex-col">
      <div className="w-full h-12 bg-blue-700 text-white flex items-center justify-center shadow-md">
        <span className="block font-bold text-2xl -mt-1">Logo</span>
      </div>
      <div className="w-full items-center flex flex-col flex-1">
        <div className="w-full flex flex-col items-center bg-white h-min pt-8 pb-24 rounded-b-full shadow-sm">
          <h1 className="text-4xl font-bold text-blue-700">
            Welcome to Applifyzr.io
          </h1>
          <p className="mt-4 text-lg text-center">
            This is a sample app to demonstrate accessibility features.
          </p>
        </div>
        <div className="flex-1 w-full">
          <div className="mx-auto -mt-16 bg-white rounded-lg shadow-md border border-solid border-gray-200 py-8 px-6 min-w-[600px] w-min flex flex-col gap-4">
            <img
              src="/signup.svg"
              className="w-9/12 mx-auto"
              aria-hidden="true"
              alt=""
            />
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-bold mb-2 text-neutral-700"
              >
                Email <span className="text-red-600">*</span>
              </label>
              <Input
                name="email"
                id="email"
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.currentTarget.value }))
                }
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-bold mb-2 text-neutral-700"
              >
                Name <span className="text-red-600">*</span>
              </label>
              <Input
                name="name"
                id="name"
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.currentTarget.value }))
                }
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-lg font-bold mb-2 text-neutral-700"
              >
                Company name
              </label>
              <Input
                name="company"
                id="company"
                onChange={(e) =>
                  setForm((f) => ({ ...f, company: e.currentTarget.value }))
                }
              />
            </div>
            <div className="flex gap-3">
              <Checkbox
                name="agree"
                id="agree"
                onChange={(value) => setForm((f) => ({ ...f, agree: value }))}
              />
              <label htmlFor="agree">
                I agree to the privacy policy and terms of service
              </label>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-top w-full py-8">
          <div className="mx-auto w-[600px] flex justify-between gap-12">
            <button className="bg-gray-500 hover:bg-gray-600 transition-colors font-bold text-white px-12 py-3 rounded-md flex-1">
              Previous
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 transition-colors font-bold text-white px-12 py-3 rounded-md flex-1">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
