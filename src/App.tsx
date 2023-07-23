import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { generatePassword } from "./util/password";

type Inputs = {
  length: number;
  upcaseLetters: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

function App() {
  const [generatedPassword, setGeneratedPassword] = useState<string | null>(
    null
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { length, ...rest } = data;
    const optionsResult = Object.values(rest).reduce(
      (acc, value) => acc || value,
      false
    );
    if (!optionsResult) {
      // TODO add error message
      return;
    }

    const options = data;

    const password = generatePassword({
      ...options,
      length,
      uppercase: options.upcaseLetters,
    });
    setGeneratedPassword(password);
  };

  return (
    <main className="h-screen bg-slate-50 flex flex-col items-center">
      <header className="text-center text-2xl p-8 font-bold border-dashed">
        Gizem's Password Generator
      </header>
      <section className="text-xl bg-white rounded drop-shadow-md p-8 max-w-3xl w-full">
        {generatedPassword && (
          <div className="flex flex-col gap-2">
            <label htmlFor="generated-password">Your password</label>
            <textarea
              className="rounded border border-dashed border-slate-600 p-4 resize-none"
              value={generatedPassword}
              readOnly
            />
          </div>
        )}
        <h2>Choose your options below</h2>
        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="length">Length</label>
            <input
              {...register("length", { required: true })}
              id="length"
              type="number"
              min="8"
              max="64"
              defaultValue="16"
              className="rounded border border-slate-300 p-2"
            />
            {errors.length && <span>This field is required</span>}
          </div>
          <div className="flex gap-2">
            <input
              {...register("upcaseLetters")}
              type="checkbox"
              defaultChecked
              className="accent-pink-500"
            />
            Include uppercase letters
          </div>
          <div className="flex gap-2">
            <input
              {...register("lowercase")}
              type="checkbox"
              defaultChecked
              className="accent-pink-500"
            />
            Include lowercase letters
          </div>
          <div className="flex gap-2">
            <input
              {...register("numbers")}
              type="checkbox"
              defaultChecked
              className="accent-pink-500"
            />
            Include numbers
          </div>
          <div className="flex gap-2">
            <input
              {...register("symbols")}
              type="checkbox"
              defaultChecked
              className="accent-pink-500"
            />
            Include symbols
          </div>
          <button type="submit" className="bg-slate-600 text-white rounded p-2">
            Generate Password
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
