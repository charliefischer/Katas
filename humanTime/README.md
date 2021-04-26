Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

| Input | Output |
|-------|--------|
| 1 | 00:00:01 | 
| 60 | 00:01:00 |
| 3600 | 01:00:00 |


time(60) => 00:01:00
