import { defineSchedule } from "eve/schedules";

export default defineSchedule({
  cron: "0 * * * *",
  run() {
    console.log(`[hourly] fired at ${new Date().toISOString()}`);
  },
});
