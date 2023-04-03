export const meetings: {[key: string]: Meeting} = {};

/**
 * @description - Meeting manager
 */
export class MeetingManager {
  /**
   * @description - Create a meeting
   * @param {string} id - Meeting ID
   * @return {Meeting} - The created meeting
   */
  static createMeeting(id: string): Meeting {
    const meeting = new Meeting(id);
    meetings[meeting.id] = meeting;
    return meeting;
  }
}

/**
 * @description - A meeting instance
 */
export class Meeting {
  id: string;
  host: string;
  participants: string[];
  start: Date;

  /**
   * @description - Meeting constructor
   * @param {string} id - Meeting ID
   */
  constructor(id: string) {
    this.id = id;
    this.host = '';
    this.participants = [];
    this.start = new Date();
  }
}
