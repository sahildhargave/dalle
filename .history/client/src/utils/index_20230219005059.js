import { surpriseMePrompts } from "../constants";
import FileSaver from 'file-saver';
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() *
        surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if (randomIndex === prompt)
        return getRandomPrompt(prompt);






    return randomPrompt;

}
export async function downloading(_id, phot) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}