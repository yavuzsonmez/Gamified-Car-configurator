import {
	exampleConfigurations
} from "../examples";
import CarConfiguration from "../interfaces/CarConfiguration.interface";
import AvatarConfiguration from "../interfaces/provideAvatar.interface";
import { scoringLogic } from "../ScoringLogic";

require('dotenv').config();
/**
 * Scoring Manager
 */
export default class ScoringManager {
	// Shared Instance
	static instance = ScoringManager.getInstance();

	public static getInstance(): ScoringManager {
		if (!ScoringManager.instance) {
			ScoringManager.instance = new ScoringManager();
		}

		return ScoringManager.instance;
	}

	/* Calculate the score of the avatar */
	calculateScore(avatar: AvatarConfiguration): any {
		console.log("INCOMING REQUEST!" + avatar)
		return scoringLogic(avatar as any);
	}
}
