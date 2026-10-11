// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).
const oneTimeTasks = [];
const monitoringTaskId = [];

// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	oneTimeTasks.push({function: func, delay: delay});
}
// Task 3: Run One-Time Tasks Function
function runOneTimeTasks ()
{
	for (const oneTimeTask of oneTimeTasks)
	{
		setTimeout(oneTimeTask.function, oneTimeTask.delay);
	}
}

// Task 4: Start Monitoring Function
function startMonitoring ()
{
	console.log("Starting continuous monitoring of space station parameters...");

	monitoringTaskId = setInterval(
		function ()
		{
			console.log("Monitoring space station conditions...");

			/* Condition checks. */
			const oxygenLevel = Math.random() * 100; // Mock-up oxygen level percentage.
			const powerStatus = Math.random() > 0.1 ? "Stable" : "Critical"; // Mock-up power status.
			const communicationCheck = Math.random() > 0.05 ? "All systems go" : "Communication error"; // Mock-up communication system check.
			console.log(`Oxygen Level: ${oxygenLevel.toFixed(2)}% | Power Status: ${powerStatus} | Communication: ${communicationCheck}`);
		},
		2000
	);
}

// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	console.log("Stop monitoring");
	clearInterval(monitoringTaskId);
}

// Task 6: Start Countdown Function
function startCountdown (duration)
{
	setInterval(duration -= 1)
	clearInterval(startCountdown);
	console.log("Liftoff!");
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{


	startMonitoring(); 
	addOneTimeTask(function () {console.log("Pre-launch system check complete.");}, 5000);
	addOneTimeTask(stopMonitoring, 10000); 
	addOneTimeTask(function () {startCountdown(10);}, 15000); 

	runOneTimeTasks(); 
}

scheduleMission(); 



