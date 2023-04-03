import {randomInt} from 'crypto';
import {Request, Response} from 'express';
import {readFileSync} from 'fs';

export const words: string[] = readFileSync('./data/words.txt', 'utf-8').split('\n');

/**
 * @url - /api/createMeeting
 * @description - Create a meeting
 */
export class ApiCreateMeeting {
  /**
   * @param {Request} req - Request object
   * @param {Response} res - Response object
   */
  static createMeeting(req: Request, res: Response) {
    const meetingId = ApiCreateMeeting.generateID();

    res.status(200).send(meetingId);
  }

  /**
   * @description - Generate a random meeting ID
   * @return {string} - The generated meeting ID
  */
  static generateID(): string {
    let id = '';
    for (let i = 0; i < 3; i++) {
      id += words[randomInt(0, words.length)];
    }

    return id;
  }
}
