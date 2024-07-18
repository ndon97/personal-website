import Timeline from './Timeline/TimeLine';

export default function MyJourney() {
  return (
    <div className="mt-10 flex h-auto w-full flex-col justify-center px-4 sm:px-10 lg:mt-0 lg:h-[100dvh]">
      <h1 className="mb-8 text-center text-3xl font-medium text-teal-600 sm:text-4xl">
        My Journey
      </h1>
      <Timeline />
    </div>
  );
}
