import { Coach } from "./coach";

export class CricketCoach implements Coach{
    getDailyWorkout(): string {
        return 'Spend 5 minutes on crickets';
    }

}