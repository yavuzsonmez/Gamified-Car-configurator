import { object, string, number, AnySchema } from "yup";
import { Request, Response, NextFunction } from 'express';

/**
 * Represents the character
 */
export default interface AvatarConfiguration {
	gender: string,
	skin_color: string,
	haircut: string,
	glasses: string,
	outfit: string,
	pet: string,
	kids: number,
	favorite_activity: string,
	environment: string,
}

/**
 * Validates AvatarConfiguration
 */
export const avatarConfigurationSchema = object({
	body: object({
		gender: string().required(),
		head: string().required(),
		outfit: string().required(),
		pet: string().required(),
		kids: number().required(),
		favorite_activity: string().required(),
		environment: string().required(),
	}),
});

/**
 * Validating function for AvatarConfiguration
 */
export const validateAvatarConfigurationMiddleware = (schema: AnySchema) => async function (req: Request, res: Response, next: NextFunction) {
	try {
		await schema.validate({
			body: req.body,
			query: req.query,
			params: req.params,
		});
		return next();
	} catch (error) {
		return res.status(400).send({ success: false, message: "Invalid data format!" });
	}
};
