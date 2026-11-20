// DM2008 — Activity 8a
// Type 2: On/Off Control (10 min)

// the pin your LED is connected to
int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT); // tell Arduino this pin will send signals, not receive them
}

void loop() {
  digitalWrite(ledPin, HIGH); // LED on
  delay(500);
  digitalWrite(ledPin, LOW);  // LED off
  delay(500);
}