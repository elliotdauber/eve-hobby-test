import { defineSchedule } from "eve/schedules";

export default defineSchedule({
  cron: "0 9 * * *",
  run() {
    console.log(`[reports/daily] fired at ${new Date().toISOString()}`);
  },
});
