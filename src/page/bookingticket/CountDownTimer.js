import React from "react";

const Timer = ({ seconds }) => {
	const [timeLeft, setTimeLeft] = React.useState(seconds);

	const displayTimeLeft = (seconds) => {
		let minutesLeft = Math.floor(seconds / 60);
		let secondsLeft = seconds % 60;
		minutesLeft = minutesLeft.toString().length === 1 ? "0" + minutesLeft : minutesLeft;
		secondsLeft = secondsLeft.toString().length === 1 ? "0" + secondsLeft : secondsLeft;
		return `${minutesLeft}:${secondsLeft}`;
	};

	React.useEffect(() => {
		if (!timeLeft) return;

		const intervalId = setInterval(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [timeLeft]);

	if (timeLeft < 1) {
		alert("Bạn đã hết thời gian đặt vé!!");
	}

	return <>{displayTimeLeft(timeLeft)}</>;
};

export default Timer;
