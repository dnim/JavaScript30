let testSeconds = 56;
let testMinutes = 54;
let testMinutesZeroCounter = 0;
let testHoursZeroCounter = 0;
let testHours = 9;

/**
 * This function tries to simulate more dangerous use cases 
 * @return {object} time values
 */
const getTestTime = () => {
  testSeconds++;
  testMinutes++; // secs == 54,55,56
  testHours++;
  if (testSeconds === 60) {
    testSeconds = 0; 
  } else if (testSeconds === 3) {
    testSeconds = 56;
  }

  if (testMinutes === 60) {
    testMinutes = 0; 
  } else if (testMinutes === 4) {
    testMinutes = 54;
  } else if (testMinutes === 1 && testMinutesZeroCounter < 3) {
    testMinutes = 0;
    testMinutesZeroCounter++;
  } else {
    testMinutesZeroCounter = 0;
  }

  if (testHours === 12) {
    testHours = 0; 
  } else if (testHours === 5) {
    testHours = 9;
  } else if (testHours === 1 && testHoursZeroCounter < 3) {
    testHours = 0;
    testHoursZeroCounter++;
  } else {
    testHoursZeroCounter = 0;
  }          

  const time = {
    seconds: testSeconds,
    minutes: testMinutes,
    hours: testHours,
  };

  console.debug("test time values: ", time);     

  return time;
}