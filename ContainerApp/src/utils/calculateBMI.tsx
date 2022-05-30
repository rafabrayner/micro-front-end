/**
 * Calculates the Body Mass Index
 * 
 * @param weight 
 * @param height 
 * @returns 
 */
export default function calculateBMI(weight: number, height: number): number {
 return weight / (height**2);
}