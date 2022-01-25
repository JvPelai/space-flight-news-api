import { Request, Response } from 'express';
import { Article } from '../entity/Article';
import { getManager } from 'typeorm';

export class ArticlesController {
	static async getArticles(
		req: Request,
		res: Response
	): Promise<Article[] | null> {
		const entityManager = getManager();
		try {
			const articles = await entityManager.find(Article);
			return articles;
		} catch (err) {
			console.log(err);
			return null;
		}
	}
}
