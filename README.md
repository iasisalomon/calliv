# Calliv

## A calibration tool for biological sciences

### Why I started Calliv

I needed practice and repos to show in interviews and stuff. I am biotechnology student and I pursue the objective of working with AI and Deep learning for biological science. Mix those toghether and Calliv was born.

### What does calliv do?
In biological science is a common practice in essays to determine the value of a property in a given protein or element by interpolation. The measurement of a given property such as absorbance, fluorescence, radiation, electrical resistance, temperature, etc. is observed for a set number of standards creating a curve based on the masured values of such standards. Then, the unknown value is measured and with that value the interpolation value is calculated.
Calliv is a solution that recieves a matrix of each standard and its measured value, displays the data in a convenient way and you can fit a regression model that fits the data.

### How does Calliv achieves that
Calliv takes care of an uploaded CSV with a matrix of the results of the essay, orders the data in a way it's useful and displays it.
Then you can fit a regression model to the data, in order to choose a best fit for the interpolation.
Data is drawn in order to discard potential outliers.


### Versioning

#### 1.0 or Old
Version 1.0 (or old) goes through this thought process in a pure front-end Vue environment. It uses local storage to store data and various packages to achieve the goal. It's code is messy, considering the experience I had in coding at the moment I started it. On May 2021, I decided it was better to start from scratch, centering development on a NuxtJS environment, cleaning the code and applying new knowledge acquired by practice.
You can still download that version, with the following considerations:
- X axis standards are hardcoded
- Only lineal regression is working

### Version 2
Version 2 will have the same main objective in mind, with the additional of the acquired experience. This experience also brings in the possibility of new functionality.
The main objectives of this version are:
-  Clean the code, and modularize better the functionality
-  Do a SSR application
-  Better handle the CSV parsing, allowing the user to determine which parts of the matrix represent callibration of the equipment (measurement noise) and group the data in the way it was displayed for the essay
-  Optimize TFJs application in order to smooth memory usage
-  Prioritize using the least amount of packages that make sense


### Feel free to contact
If you are a recruiter or simply interested on the idea, feel free to contact me opening an issue or sending a message. Contributions and forks are welcome beeing deeply grateful to each contribution 