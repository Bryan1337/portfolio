
export const calculateAge = (birthDate: Date) => {

	const today = new Date();

	const birthDateInMilliseconds = birthDate.getTime();

	const todayInMilliseconds = today.getTime();

	const ageInMilliseconds = todayInMilliseconds - birthDateInMilliseconds;

	const ageInSeconds = ageInMilliseconds / 1000;

	const ageInMinutes = ageInSeconds / 60;

	const ageInHours = ageInMinutes / 60;

	const ageInDays = ageInHours / 24;

	const ageInYears = ageInDays / 365;

	return Math.floor(ageInYears);
}