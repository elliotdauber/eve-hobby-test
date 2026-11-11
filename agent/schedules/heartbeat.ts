import { defineSchedule } from "eve/schedules";

// Hobby's most frequent schedule: every 15 minutes.
export default defineSchedule({
  cron: "* * * * *",
  run() {
    console.log(`[heartbeat] fired at ${new Date().toISOString()}`);
  },
});
