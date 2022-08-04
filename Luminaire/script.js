var tapeString = [
  
  //Formatting: Name, Shortened, price/foot, description
  "ID-3528-60-12-30 | TA3 | 3 | 3528 Tape Light (3000K) 60 LEDs",
"ID-3528-60-12-40 | TA4 | 3 | 3528 Tape Light (4000K) 60 LEDs",
"ID-3528-60-12-50 | TA5 | 3 | 3528 Tape Light (5000K) 60 LEDs",
"ID-3528-60-12-65 | TA6 | 3 | 3528 Tape Light (6500K) 60 LEDs",
"ID-3528-60-12N-40 | TN4 | 3 | 3528 Tape Light (4000K) 60 LEDs",
"ID-3528-60-12N-50 | TN5 | 3 | 3528 Tape Light (5000K) 60 LEDs",
"ID-3528-60-12-B | TAB | 3 | 3528 Tape Light (Blue) 60 LEDs",
"ID-3528-60-12-G | TAG | 3 | 3528 Tape Light (Green) 60 LEDs",
"ID-3528-60-12-PK | TAP | 3 | 3528 Tape Light (Pink) 60 LEDs",
"ID-3528-60-12-PL | TAL | 3 | 3528 Tape Light (Purple) 60 LEDs",
"ID-3528-60-12-R | TAR | 3 | 3528 Tape Light (Red) 60 LEDs",
"ID-3528-60-12-Y | TAY | 3 | 3528 Tape Light (Amber) 60 LEDs",
"ID-3528-60-24-50 | TE5 | 3 | 3528 Tape Light (5000K) 60 LEDs",
"ID-3528-120-12-40 | TB4 | 5 | 3528 Tape Light (4000K),120 LEDs",
"ID-3528-120-12-50 | TB5 | 5 | 3528 Tape Light(5000K) 120 LEDs",
"ID-3528-120-12-65 | TB6 | 5 | 3528 Tape Light(6500K) 120 LEDs",
"ID-3528-120-24-30 | TD3 | 5 | 3528 Tape Light(3000K) 120 LEDs",
"ID-3528-120-12-G | TBG | 5.00 | 3528 Tape Light (Green) 120 LEDs",
"ID-2835-60-12-30 | TV3 | 3 | 2835 Tape Light (3000K) 60 LEDs",
"ID-2835-120-12-30 | TQ3 | 5.00| 2835 Tape Light (3000K) 120 LEDs",
"ID-2835-120-12-SY | TQS | 5.00 | 2835 Tape Light (Sprint yellow),120 LEDs",
"ID-2835-120-24-40 | TO4 | 5.00 | 2835 Tape Light (4000K),120 LEDs",
"ID-5050-60-12-30 | TC3 | 5 | 5050 Tape Light (3000K) 60 LEDs",
"ID-5050-60-12-40 | TC4 | 5 | 5050 Tape Light (4000K) 60 LEDs",
"ID-5050-60-12-50 | TC5 | 5 | 5050 Tape Light (5000K) 60 LEDs",
"ID-5050-60-12-65 | TC6 | 5 | 5050 Tape Light (6500K) 60 LEDs",
"ID-5050-60-12-B | TCB | 5 | 5050 Tape Light (Blue) 60 LEDs",
"ID-5050-60-12-R | TCR | 5 | 5050 Tape Light (Red) 60 LEDs",
"ID-5050-60-12-RGB | TCRB | 5 | 5050 Tape Light(RGB),60 LEDs",
"ID-5050-60-12-RGBW | TCRW | 5 | 5050 Tape Light RGBW(5000K),60leds",
"ID-5050-60-24-50 | TK5 | 5 | 5050 Tape Light (5000K) 60 LEDs",
"ID-3528-SFLEX-12-50 | TF5 | 3.00 | 2835 60leds,12V DC,5000K flexible tape",
"ID-3528-SFLEX-12-65 | TF6 | 3.00 | 2835 60leds,12V DC,6500K flexible tape",
"ID-3528-SFLEX-12-RGB | TFR | 5.00 | 42leds 5050 ZIG ZAG,RGB",
"ID-2835-288-24-40 | TW4 | 7.80 | 2835 Tape Light (4000K) 288 LEDs,7.85W/ft",
"ID-2835-288-24-50 | TW5 | 7.80 | 2835 Tape Light (5000K) 288 LEDs,7.85W/ft",
"ID-2835-288-24-65 | TW6 | 7.80 | 2835 Tape Light (6500K) 288 LEDs,7.85W/ft",
"ID-2835L-56-24-40 | TL4 | 2.60 | 2835 Tape Light(4000K),56 LEDs",
"ID-2835L-56-24-65 | TL6 | 2.60 | 2835 Tape Light(6500K),56 LEDs"
]

var profileString = [
  //Formatting: Name, Shortened, price/foot, description
  "MA | MA | 4.20 | AL profile for magnetic",
"VB | VB | 4.20 | VINCENT Bar(Black),2800mm",
"VS | VS | 4.20 | VINCENT Bar(Silver),2800mm",
"CA | CA | 4.20 | Round bar",
"CB | CB | 4.20 | Round bar for round diffuser",
"A2515 | BB | 5 | 2515 Al profile,22.0 x 15.7 mm (0.93 x 0.62 in),3000mm",
"A3109 | BC | 5 | 3109 Al profile,30.9 x 8.8 mm (1.22 x 0.35 in),3000mm",
"A2507 | BD | 5 | 2507 Al profile,11.2 x 16.6 mm (0.44 x 0.65 in),3000mm",
"A1919 | CC | 5 | 1919 Al profile,18.5 x 18.5 mm (0.73 x 0.73 in),3000mm",
"A2114 | CE | 5 | 2114 Al profile,21.0 x 21.0 mm (0.83 x 0.83 in),3000mm",
"A1818 | CF | 5 | 1818 Al profile,19.0 x 19.0 mm (0.75 x 0.75 in),3000mm",
"A1612 | CG | 5 | 1612 Al profile,16.0 x 13.0 mm (0.63 x 0.514 in),3000mm",
"A1506 | CH | 3 | 1506 Al profile,16.0 x 13.0 mm (0.63 x 0.514 in),3000mm"
]

var wireString = [
  //Formatting: Name, Shortened, price/foot, description
  "SJ | SJ | 1.00 | 3.5mm Female jack",
"SP | SP | 1.00 | 3.5mm Male plug",
"MJ | MJ | 1.00 | 5.5/2.1mm female jack",
"MP | MP | 1.00 | 5.5/2.1mm male plug",
"LJ | LJ | 1.00 | 5.5/2.5mm female jack",
"LP | LP | 1.00 | 5.5/2.5mm male plug",
"SF | SF | 1.00 | Small harness female",
"SM | SM | 1.00 | Small harness male",
"MF | MF | 1.00 | Medium harness female",
"MM | MM | 1.00 | Medium harness male",
"TF | TF | 1.00 | Termianal harness female",
"TM | TM | 1.00 | Termianal harness male",
"RF | RF | 1.00 | RGB Harness female",
"RM | RM | 1.00 | RGB Harness male",
"ST | ST | 1.00 | SM Track line power connector"

]

var productString = [
  "ID-3528-60-12-30-16 | 49.50 | 3528 Tape Light (3000K) 60 LEDs",
"ID-3528-60-12-40-16 | 49.50 | 3528 Tape Light (4000K) 60 LEDs",
"ID-3528-60-12-50-16 | 49.50 | 3528 Tape Light (5000K) 60 LEDs",
"ID-3528-60-12-65-16 | 49.50 | 3528 Tape Light (6500K) 60 LEDs",
"ID-3528-60-12N-40-16 | 49.50 | 3528 Tape Light (4000K) 60 LEDs",
"ID-3528-60-12N-50-16 | 49.50 | 3528 Tape Light (5000K) 60 LEDs",
"ID-3528-60-12-B-16 | 49.5 | 3528 Tape Light (Blue) 60 LEDs",
"ID-3528-60-12-G-16 | 49.5 | 3528 Tape Light (Green) 60 LEDs",
"ID-3528-60-12-PK-16 | 49.5 | 3528 Tape Light (Pink) 60 LEDs",
"ID-3528-60-12-PL-16 | 49.5 | 3528 Tape Light (Purple) 60 LEDs",
"ID-3528-60-12-R-16 | 49.5 | 3528 Tape Light (Red) 60 LEDs",
"ID-3528-60-12-Y-16 | 49.5 |3528 Tape Light (Amber) 60 LEDs",
"ID-3528-60-24-50-16 | 49.50 | 3528 Tape Light (5000K) 60 LEDs",
"ID-3528-120-12-40-16 | 75.00 | 3528 Tape Light (4000K),120 LEDs",
"ID-3528-120-12-50-16 | 75.00 | 3528 Tape Light(5000K) 120 LEDs",
"ID-3528-120-12-65-16 | 75.00| 3528 Tape Light(6500K) 120 LEDs",
"ID-3528-120-24-30-16 | 75.00| 3528 Tape Light(3000K) 120 LEDs",
"ID-3528-120-12-G-16 | 75.00| 3528 Tape Light (Green) 120 LEDs",
"ID-2835-60-12-30-16 | 75.00| 2835 Tape Light (3000K) 60 LEDs",
"ID-2835-120-12-30-16 | 75.00| 2835 Tape Light (3000K) 120 LEDs",
"ID-2835-120-12-SY-16 | 75.00| 2835 Tape Light (Sprint yellow),120 LEDs",
"ID-2835-120-24-40-16 | 75.00| 2835 Tape Light (4000K),120 LEDs",
"ID-5050-60-12-30-16 | 82| 5050 Tape Light (3000K) 60 LEDs",
"ID-5050-60-12-40-16 | 82| 5050 Tape Light (4000K) 60 LEDs",
"ID-5050-60-12-50-16 | 82| 5050 Tape Light (5000K) 60 LEDs",
"ID-5050-60-12-65-16 | 82| 5050 Tape Light (6500K) 60 LEDs",
"ID-5050-60-12-B-16 | 82| 5050 Tape Light (Blue) 60 LEDs",
"ID-5050-60-12-R-16 | 82| 5050 Tape Light (Red) 60 LEDs",
"ID-5050-60-12-RGB-16 | 82| 5050 Tape Light(RGB),60 LEDs",
"ID-5050-60-12-RGBW-16 | 82| 5050 Tape Light RGBW(5000K),60leds",
"ID-5050-60-24-50-16-16 | 82| 5050 Tape Light (5000K) 60 LEDs",
"ID-3528-SFLEX-12-50-16 | 49.50 | 2835 60leds,12V DC,5000K flexible tape",
"ID-3528-SFLEX-12-65-16 | 49.50 | 2835 60leds,12V DC,6500K flexible tape",
"ID-3528-SFLEX-12-RGB-16 | 82 | 42leds 5050 ZIG ZAG,RGB",
"ID-2835-288-24-40-100 | 850.00 | 2835 Tape Light (4000K) 288 LEDs,7.85W/ft",
"ID-2835-288-24-50-100 | 850.00 | 2835 Tape Light (5000K) 288 LEDs,7.85W/ft",
"ID-2835-288-24-65-100 | 850.00 | 2835 Tape Light (6500K) 288 LEDs,7.85W/ft",
"ID-2835L-56-24-40-100 | 450.00 | 2835 Tape Light(4000K),56 LEDs",
"ID-2835L-56-24-65-100 | 450.00 | 2835 Tape Light(6500K),56 LEDs",
"ID-3528-60-12-30-100 | 280.00 | 3528 Tape Light (3000K) 60 LEDs",
"ID-3528-60-12-40-100 | 300.00 | 3528 Tape Light (4000K) 60 LEDs",
"ID-3528-60-12-50-100 | 300.00 | 3528 Tape Light (5000K) 60 LEDs",
"ID-3528-60-12-65-100 | 300.00 | 3528 Tape Light (6500K) 60 LEDs",
"ID-3528-60-12N-40-100 | 300.00 | 3528 Tape Light (4000K) 60 LEDs",
"ID-3528-60-12N-50-100 | 300.00 | 3528 Tape Light (5000K) 60 LEDs",
"ID-3528-60-12-B-100 |300.00 | 3528 Tape Light (Blue) 60 LEDs",
"ID-3528-60-12-G-100 | 300.00 | 3528 Tape Light (Green) 60 LEDs",
"ID-3528-60-12-PK-100 | 300.00 | 3528 Tape Light (Pink) 60 LEDs",
"ID-3528-60-12-PL-100 | 300.00 | 3528 Tape Light (Purple) 60 LEDs",
"ID-3528-60-12-R-100 | 300.00 | 3528 Tape Light (Red) 60 LEDs",
"ID-3528-60-12-Y-100 | 300.00 | 3528 Tape Light (Amber) 60 LEDs",
"ID-3528-60-24-50-100 | 300.00 | 3528 Tape Light (5000K) 60 LEDs",
"ID-3528-120-12-40-100 | 500.00| 3528 Tape Light (4000K),120 LEDs",
"ID-3528-120-12-50-100 | 500| 3528 Tape Light(5000K) 120 LEDs",
"ID-3528-120-12-65-100 | 500| 3528 Tape Light(6500K) 120 LEDs",
"ID-3528-120-24-30-100 | 500| 3528 Tape Light(3000K) 120 LEDs",
"ID-3528-120-12-G-100 | 500| 3528 Tape Light (Green) 120 LEDs",
"ID-2835-60-12-30-100 | 500| 2835 Tape Light (3000K) 60 LEDs",
"ID-2835-120-12-30-100 | 500| 2835 Tape Light (3000K) 120 LEDs",
"ID-2835-120-12-SY-100 | 500| 2835 Tape Light (Sprint yellow),120 LEDs",
"ID-2835-120-24-40-100 | 500| 2835 Tape Light (4000K),120 LEDs",
"ID-5050-60-12-30-100 | 500.00| 5050 Tape Light (3000K) 60 LEDs",
"ID-5050-60-12-40-100 | 500.00| 5050 Tape Light (4000K) 60 LEDs",
"ID-5050-60-12-50-100 | 500.00| 5050 Tape Light (5000K) 60 LEDs",
"ID-5050-60-12-65-100 | 500.00| 5050 Tape Light (6500K) 60 LEDs",
"ID-5050-60-12-B-100 | 500| 5050 Tape Light (Blue) 60 LEDs",
"ID-5050-60-12-R-100 | 500.00| 5050 Tape Light (Red) 60 LEDs",
"ID-5050-60-12-RGB-100 | 500.00| 5050 Tape Light(RGB),60 LEDs",
"ID-5050-60-12-RGBW-100 | 500.00| 5050 Tape Light RGBW(5000K),60leds",
"ID-5050-60-24-50-16-100 | 500.00| 5050 Tape Light (5000K) 60 LEDs",
"ID-3528-SFLEX-12-50-100 | 300.00 | 2835 60leds,12V DC,5000K flexible tape",
"ID-3528-SFLEX-12-65-100 | 300.00 | 2835 60leds,12V DC,6500K flexible tape",
"ID-3528-SFLEX-12-RGB-32 | 195.00 | 42leds 5050 ZIG ZAG,RGB",

"OD-3528A-60-12-30W-100 | 500.0 | Outdoor IP68 3528A Tape Light (3000k)",
"BA-WSAP-AF12-46 | 12.80 | 46.5 inch wood showcase Al profile",
"BA-WSAP-AF12-58 | 15.00 | 58.5 inch wood showcase Al profile",
"BA-WSAP-AF12-68 | 18.00 | 68.5 inch wood showcase Al profile",
"LF-0120-BASE-2040 | 7.00 | BASE for LF-0120-DSSV",
"LF-0156-BASE-2040 | 7.00 | BASE for LF-0156-DSSV",
"CLIP-PER-M6N | 0.50 | Plastic M6 nut for Perimeter Light",
"CLIP-PER-M6S | 0.50 | Plastic M6 nut for Perimeter Light",
"CLIP-CA-MT-V | 0.50 | Metal clip with Al plate-Vertical",
"CLIP-CA-MT-H | 0.50 | Metal clip with Al plate-Horizonal",
"CLIP-CG-MT | 0.50 | Metal clip-CG(1612)",
"CLIP-CE-MT | 0.50 | Metal clip-CE(2114)",
"CLIP-CA-MGN | 0.50 | Metal Clip with Magnet",
"CLIP-N24-MC | 0.50 | Metal Mounting Clip for N2-4",
"CLIP-CA-MT | 0.50 | Metal clip-CA,CB,A1818",
"CLIP-CH-MGN | 0.50 | Clip with Magnet",
"CLIP-CH-MT | 0.50 | Metal clip-CH(1506)",
"CLIP-CH-PT | 0.50 | Plastic clip-CH(1506)",
"CLIP-CJ-MT | 0.50 | Metal clip-CJ",
"CLIP-LF-0050-SWSV | 0.50 | Aluminum corner for LF-0050-SWSV",
"CLIP-LF-0065-SWSV | 0.50 | Aluminum corner for LF-0065-SWSV",
"CLIP-LF-0100-SWSV | 0.50 | Aluminum corner for LF-100X-SWSV",
"CLIP-LF-0120-DSSV | 0.50 | Aluminum corner for LF-0120-DSSV",
"CLIP-LF-0120-SWSV | 0.50 | Aluminum corner for LF-0120-SWSV",
"CLIP-LF-0156-DSSV | 0.50 | Aluminum corner for LF-0156-DSSV",
"CLIP-MT-H1 | 0.50 | 10mm LED tape holder with screw hole",
"CLIP-ST-H1 | 0.50 | 8mm LED tape holder with screw hole",
"DP-28 | 5.00 | 28.5\" Al DOWN POST",
"DP-33 | 5.00 | 33\" Al DOWN POST",
"DP-34 | 5.00 | 34\" Al DOWN POST",
"DP-72 | 7.00 | 72\" AL DOWN POST",
"EC-BB-SH | 0.50 | A 2515 Endcap with hole",
"EC-BB-NH | 0.50 | A 2515 Endcap",
"N24-ECS | 0.50 | End cap w/o hole for N2-4(silicone version)",
"N24-ECH | 0.50 | End cap with hole for N2-4(silicone version)",
"EC-CA-LH | 0.50 | CA profile endcap with 5.5 hole",
"EC-CA-NH | 0.50 | CB profile endcap",
"EC-CA-SH | 0.50 | CA profile endcap with hole",
"EC-CB-NH | 0.50 | CB profile endcap",
"EC-CB-SJ | 0.50 | CB profile endcap with wire",
"EC-CC-SH | 0.50 | C 1919 Endcap with hole",
"EC-CF-NH | 0.50 | A 1818 Endcap",
"EC-CF-SH | 0.50 | A 1818 Endcap with hole",
"EC-CG-NH | 0.50 | A 1612 Endcap",
"EC-CG-SH | 0.50 | A 1612 Endcap with hole",
"EC-CH-NH | 0.50 | A 1506 Endcap",
"EC-CH-SH | 0.50 | A 1506 Endcap with hole",
"EC-MS-SN | 0.50 | MS ENDCAP",
"EC-ST-N | 0.50 | SM Power track ENDCAP",
"IJS-3CS-01-NW | 25.00 | 3W,24 degree Beam Spread,5000K,Arm light-Round",
"IJS-1RS-01-NW | 25.00 | 1.5W,24 degree Beam Spread,5000K,Arm light-Round",
"IJS-2RS-02-NW | 25.00 | 2W,24 degree Beam Spread,5000K,Arm light",
"DL-OS-03W-30 | 18.00 | 3W LED Down Light,3000K",
"DL-OS-03W-40 | 18.00 | 3W LED Down Light,4000K",
"DL-OS-03W-65 | 18.00 | 3W LED Down Light,6500K",
"DL-OS-09W-53 | 32.00 | 9W LED Down Light",
"DL-OS-12W-53 | 32.00 | 12W LED Down Light",
"JYD8-26-7-24V-65 | 26.80 | 26\" Ladder light, 24V,4.8W/PC,6500K",
"JYD8-40-14-24V-65 | 38.20 | 40\" Ladder light, 24V,4.8W/PC,6500K",
"JIDS-17-05-12V-40 | 18.50 | 17\" Ladder light, 12V,4.8W/PC,4000K",
"JIDS-17-05-12V-65 | 18.50 | 17\" Ladder light, 12V,4.8W/PC,6500K",
"LDN-1224-24V-65 | LDN | 58.00 Flex light panel(12.0\"X24.0\"),6500K",
"LDN-1224-24V-RGB | LDN | 58.00 Flex light panel(12.0\"X24.0\"),RGB",
"LPN-0919-12V-65 | LPN | 58.00 Flex light pannel(9.5\"X19.0\"),Wide angle,6500K",
"LFN-0516-24V-65 | LFN | 12.00 New shape,Rigid pannel light,6500K",
"LFN-1104-12V-65 | 23.00 | Rigid pannel light(10.63\"X3.54\"),6500K",
"LFN-1117-12V-65 | 45.00 | Rigid pannel light(10.63\"X17.70\"),6500K",
"LFN-1121-12V-50 | 45.00 | Backlit pannel light(10.63\"X21.25\"),5300K",
"LFN-1121-12V-65 | 45.00 | Backlit pannel light(10.63\"X21.25\"),6500K",
"LFN-1614-12V-65 | 45.00 | Backlit pannel light(15.95\"X14.17\"),6500K",
"LGP-NA6-6K-1212 | 25.00 | Light guide acylic pannel(12\"X12\")",
"LGP-NA6-6K-2436 | 104.00 | Light guide acylic pannel(24\"X36\")",
"LGP-NA6-6K-3648 | 185.00 | Light guide acylic pannel(36\"X48\")",
"LGP-R30-5K-2436 | 260.00 | LIGHT GUIDE PANEL(24\"X36\")",
"LGP-R30-5K-3648 | 490.00 | LIGHT GUIDE PANEL(36\"X48\")",
"LGP-R30-5K-4872 | 970.00 | LIGHT GUIDE PANEL(48\"X72\")",
"LGP-R30-5K-4884 | 1,150.00 | LIGHT GUIDE PANEL(48\"X84\")",
"LGP-R30-5K-4896 | 1,300.00 | LIGHT GUIDE PANEL(48\"X96\")",
"SS-JDL-65 | 0.38 | 2 Chips LED Module(6500K)",
"SS-KBD-BLU | 0.48 | 2 CHIPS LED BLUE MODULE(Blue)",
"SS-KDL-30 | 0.48 | 2 Chips LED Module(3000K)",
"SS-KDL-50 | 0.48 | 2 Chips LED Module(5000K)",
"SS-KDL-65 | 0.48 | 2 Chips LED Module(6500K)",
"SS-KDL-90 | 0.48 | 2 Chips LED Module(9000K)",
"SS-KGD-GRN | 0.48 | 2 CHIPS LED GREEN MODULE",
"SS-KRD-RED | 0.48 | 2 Chips LED Module(RED)",
"SS-WDL2-65 | 0.48 | 2 Chips LED Module(6500K) Wide Angle",
"SS-KPL40-90-FN | 0.75 | 4 Chips LED Module(9000K)-24 Hour Fitness",
"SS-KPL40-30 | 0.75 | 4 Chips LED Module(3000K)",
"SS-KPL40-65 | 0.75 | 4 Chips LED Module(6500K)",
"SS-KPL40-90 | 0.75 | 4 Chips LED Module(9000K)",
"SS-KPL40-RED | 0.75 | 4 Chips LED Module(Red)",
"SS-KOB-BLU | 0.45 | 3 Chips Mini LED White Module (BLUE)",
"SS-KOL-65 | 0.45 | 3 Chips Mini LED White Module(6500K)",
"SS-KOL-90 | 0.45 | 3 Chips Mini LED White Module(9000K)",
"SS-KOR-RED | 0.45 | 3 Chips Mini LED White Module(RED)",
"SS-CSL-R | 0.45 | 1 Chip CSL LED Module (Red)",
"SS-CSL-RGB | 0.55 | 1 Chip CSL LED Module (RGB)",
"SS-CSL-65 | 0.45 | 1 Chip CSL LED Module (6500K)",
"SS-CSL-Y | 0.45 | 1 Chip CSL LED Module (Amber)",
"SS-HPL-65 | 0.80 | LED HPL White (6500K) SS 1C (1.5W MOD)",
"SS-KSL-65 | 0.45 | 1 Chip LED Module (6500K)",
"SS-KSL-90 | 0.45 | 1 Chip LED Module (9000K)",
"SS-WDL3-LPW | 0.55 | 3 Chips LED Module(6500K) Wide Angle",
"SS-WDL3-FN | 1.00 | 3 Chips LED Module(6500K) Wide Angle,24 Fitness",
"SS-KDL-FN | 1.00 | 2 Chips LED Module(9000K)-24 Hour Fitness",
"SS-KPL-FN | 1.00 | 3 Chips LED Module(9000K)-24 Hour Fitness",
"SS-WDL3P-65 | 0.48 | 3 Chips LED Module(6500K) Wide Angle",
"SS-JPL-65 | 0.45 | 3 Chips LED Module(6500K)",
"SS-JPL-90 | 0.45 | 3 Chips LED Module(9000K)",
"SS-KB3-BLU | 0.55 | 3 Chips LED Module (BLUE)",
"SS-KG3-GRN | 0.55 | 3 Chips LED Module (GREEN)",
"SS-KPL-30 | 0.55 | 3 Chips LED Module(3000K)",
"SS-KPL-65 | 0.55 | 3 Chips LED Module(6500K)",
"SS-KPL-90 | 0.55 | 3 Chips LED Module(9000K)",
"SS-KPL-RGB | 0.75 | LED module RGB 3 dots UL",
"SS-KR3-RED | 0.55 | 3 Chips LED Module(RED)",
"SS-KY3-AMBR | 0.55 | 3 Chip LED Module (YELLOW)",
"SS-WDL3-65 | 0.55 | 3 Chips LED Module(6500K) Wide Angle",
"PER-3-W60NC | 28.00 | Perimeter 3 DIODE LED (6000K)",
"PER-5-W60NC | 33.00 | Perimeter 5 DIODE LED (6000K)",
"PER-6-W60NC | 38.00 | Perimeter 6 DIODE LED (6000K)",
"PER-3-W60C | 25.00 | Perimeter 3 DIODE LED (6000K)",
"PER-5-W60C | 30.00 | Perimeter 5 DIODE LED (6000K)",
"PER-6-W60C | 35.00 | Perimeter 6 DIODE LED (6000K)",
"PER-3-W60 | 25.00 | Perimeter 3 DIODE LED (6000K)",
"PER-5-W60 | 30.00 | Perimeter 5 DIODE LED (6000K)",
"PER-6-W60 | 35.00 | Perimeter 6 DIODE LED (6000K)",
"PER-5-OW50 | 32.00 | Outdoor Perimeter 5 DIODE LED (5000K)",
"PER-6-RGB | 38.00 | Perimeter 6 DIODE LED (RGB)",
"CTLR-DIM-24-12 | 29.00 | Dimmer-12V-24W with DC Jack",
"CTLR-12-3060-8A | 25.00 | RGBW Reapeater",
"CTLR-12-3600 | 25.00 | RGBW controller",
"CTLR-12-2000 | 25.00 | Digital RGB Controller, 12V DC",
"CTLR-RMT-F3 | 18.00 | F 3 RGB remote",
"CTLR-RMT-F4 | 18.00 | F 4 RGB remote",
"CTLR-RMT-M3 | 18.00 | RGB touch color circle remote controller",
"CTLR-RMT-M6 | 18.00 | RGBW color shortcut key remote controller",
"CTLR-RMT-M8 | 18.00 | RGB remote controller",
"CTLR-12-3060-8A | 18.00 | RGBW Reapeater",
"CTLR-CTR-T1000S | 18.00 | Chasing RGB controller",
"CTLR-EBOX-AP | 18.00 | Wireless Repeater",
"CTLR-LT-1809-DMX | 18.00 | DMX 512 Decorder",
"CTLR-LT-3600 | 18.00 | RGB controller,Built-in 32 modes,216watts",
"CTLR-LT-512-LTSA-DMX | 18.00 | DMX Master Controller",
"CTLR-LT-912-OLED | 18.00 | DMX 512 Decoder",
"CTLR-LT-924-OLED | 18.00 | DMX 512 Decoder",
"CTLR-LT-DMX-150-12-F4M1 | 18.00 | Ltech controller",
"CTLR-RCV-F4-5A | 18.00 | RGBW remote controller,F Series",
"CTLR-RCV-M3-3A | 18.00 | RGB Receiver M3-3A",
"CTLR-RCV-M4-3A | 18.00 | RGBW Receiver M3-3A\"",
"CTLR-RPT-3040-5A | 18.00 | RGB Repeater",
"CTLR-WIFI-108-F12 | 18.00 | Wifi Master controller",
"CTLR-WIFI-106-F12 | 18.00 | Wifi Master controller",
"INT-LJ-32DP-SJP-L | 5.00 | 3.5mm jack to 3.5mm L shape plug in 32\" Down post.",
"INT-LPJ-L4PJ-20 | 11.00 | 3P power plug to 4 of 3P power Jack,20\"",
"INT-LJ-2LP-12 | 5.00 | 5.5/2.5mm jack to 2 of 5.5/2.5mm plug Y splitter,12\"",
"INT-LJ-2MF-18 | 6.00 | 5.5/2.5mm jack to 2 of harness female Y splitter,18\"",
"INT-LJ-2MF-60 | 7.00 | 5.5/2.5mm jack to 2 of harness female Y splitter,60\"",
"INT-LJ-2MM-12 | 5.00 | 5.5/2.5mm jack to 2 of harness male Y splitter,12\"",
"INT-LJ-LP-24 | 5.00 | 5.5/2.5mm jack to 5.5/2.5mm plug Y splitter,24\"",
"INT-LJ-SF-96 | 9.00 | 5.5/2.5mm jack to small harness female,96\"",
"INT-LJ-2MM-18 | 5.00 | 5.5/2.5mm jack to 2 of harness male Y splitter,18\"",
"INT-LJ-2MM-60 | 6.00 | 5.5/2.5mm jack to 2 of harness male Y splitter,60\"",
"INT-LJ-2SP-12 | 5.00 | 5.5/2.5mm jack to 2 of 3.5mm plug Y splitter,12\"",
"INT-LJ-2SP-18 | 6.00 | 5.5/2.5mm jack to 2 of 3.5mm plug Y splitter,18\"",
"INT-LJ-2SP-36 | 7.00 | 5.5/2.5mm jack to 2 of 3.5mm plug Y splitter,36\"",
"INT-LJ-2SP-60 | 8.00 | 5.5/2.5mm jack to 2 of 3.5mm plug Y splitter,60\"",
"INT-LJ-4SP-60 | 18.00 |5.5/2.5mm jack to 4 of 3.5mm plug Y splitter,60\"",
"INT-LT-08MC | 1.50 | Tape Light Holder for 8mm width FPC",
"INT-LT-10MC | 1.50 | Tape Light Holder for 10mm width FPC",
"INT-LT-H2 | 1.20 | Cable joiner in 2PIN",
"INT-LT-J10-RGB-06 | 2.50 | RGB Led Tape(10mm) Clip, 6\"",
"INT-LT-J10W1-06 | 1.50 | 5050 Led Tape(10mm) Clip, 6\"",
"INT-LT-J8FW2-06 | 2.00 | FCC connector for 8mm led tape,6 inch",
"INT-LT-J8W2-06 | 2.00 | FCC connector for 8mm led tape",
"INT-LT-RGB10W0 | 1.50 | For 10mm RGB strip,strip to strip",
"INT-LT-RGB10W1-10 | 1.50 | Led tape connector For 10mm RGB strip, 10\"",
"INT-LT-RGB10W1-24 | 2.00 | Led tape connector For 10mm RGB strip, 24\"",
"INT-LT-RGB10W2-10 | 1.80 | Led tape connector For 10mm RGB strip, 10\"",
"INT-LT-RGB10W2-24 | 2.00 | Led tape connector For 10mm RGB strip, 24\"",
"INT-LT-RGB10W2-36 | 3.00 | Led tape connector For 10mm RGB strip, 36\"",
"INT-LT-RGB10W2-3 | 1.50 | Led tape connector For 10mm RGB strip, 3\"",
"INT-LT-RGB10W2-6 | 1.50 | Led tape connector For 10mm RGB strip, 6\"",
"INT-LT-S10W0 | 1.50 | Interconnector for 10mm single color tape light",
"INT-LT-S10W1-6 | 1.50 | Interconnector for 10mm single color tape light,6\"",
"INT-LT-S10W2-6 | 1.50 | Interconnector for 10mm single color tape light,6\"",
"INT-LT-S8W0 | 1.20 | Interconnector for 8mm single color tape light,6\"",
"INT-LT-S8W1-6 | 1.50 | Interconnector for 8mm single color tape light,6\"",
"INT-LT-S8W2 | 1.50 | Interconnector for 8mm single color tape light\"",
"INT-LT-S8W2-6 | 1.50 | Interconnector for 8mm single color tape light,6\"",
"INT-LT-T2 | 1.50 | T Cable joiner in 2PIN",
"INT-LT-W10CF2 | 1.50 | Interconnector for 10mm single color tape light",
"INT-LT-W10FF2 | 1.50 | Interconnector for 10mm single color tape light",
"INT-LT-W8CF2 | 1.50 | Interconnector for 8mm single color tape light",
"INT-LT-W8FF2 | 1.50 | Interconnector for 8mm single color tape light",
"INT-MF-MM-18 | 2.00 | Harness male to harness female interconnector,18\"",
"INT-MF-MM-36 | 3.00 | Harness male to harness female interconnector,36\"",
"INT-MF-MM-72 | 6.00 | Harness male to harness female interconnector,72\"",
"INT-MF-MM-60 | 5.00 | Harness male to harness female interconnector,60\"",
"INT-MF-MM-48 | 4.00 | Harness male to harness female interconnector,48\"",
"INT-MF-MM-96 | 9.00 | Harness male to harness female interconnector,96\"",
"INT-MF-MM-108 | 8.00 | Harness male to harness female interconnector,108\"",
"INT-MF-MM-144 | 9.00 | Harness male to harness female interconnector,144\"",
"INT-MJ-2MF-18 | 8.00 | 5.5/2.1mm jack to 2 of harness female Y splitter,18\"",
"INT-MJ-2MM-12 | 6.00 | 5.5/2.1mm jack to 2 of harness male Y splitter,12\"",
"INT-MJ-2MP-18 | 8.00 | 2 Way Y splitter(5.5mm jack/5.5mm plug),18\"",
"INT-MJ-2SM-18 | 8.00 | 5.5/2.1mm jack to 2 of harness male Y splitter,18\"",
"INT-MJ-2SP-18 | 8.00 | 2 WAY SPLITTER CABLE(5.5/2.1-3.5)",
"INT-MJ-4MF-18 | 18.00 | 5.5/2.1mm jack to 4 of harness female,18\"",
"INT-MJ-4MP-18 | 18.00 | 4 Way Splitter (5.5mm jack/5.5mm plug),60\"",
"INT-MJ-SF-60 | 5.00 | 5.5mm jack to harnes female Interconnector,60\"",
"INT-MJ-SF-96 | 9.00 | 5.5/2.1mm jack to harness female Interconnector,96\"",
"INT-MJ-J8W2-18 | 3.00 | 5.5/2.1 female jack with FCC connector ,18 inches",
"INT-MJ-08TC-06 | 2.00 | 5.5/2.1mm jack to 8mm LED Tape Clip,6 inch",
"INT-MJ-10TC-06 | 2.00 | 5.5/2.1mm jack to 10mm LED Tape Clip,6 inch",
"INT-MJ-LT-J8W1-06 | 5.00 | 5.5/2.1 female jack to 3528 Tape Clip 6\"",
"INT-MJ-MM-18 | 3.00 | 5.5/2.1mm jack to harness male interconnector,18\"",
"INT-MJ-MM-60 | 5.00 | 5.5/2.1mm jack to harness male interconnector,60\"",
"INT-MJ-MF-118 | 9.00 | 5.5/2.1mm jack to harness female interconnector,118\"",
"INT-MJ-MF-04 | 3.00 | 5.5/2.1mm jack to harness female interconnector,4\"",
"INT-MJ-MF-38 | 3.50 | 5.5/2.1mm jack to harness female interconnector,38\"",
"INT-MJ-MF-60 | 5.00 | 5.5/2.1mm jack to harness female interconnector,60\"",
"INT-MJ-MF-06 | 3.00 | 5.5/2.1mm jack to harness female interconnector,6\"",
"INT-MJ-MF-18 | 3.00 | 5.5/2.1mm jack to harness female interconnector,18\"",
"INT-MJ-MF-38W | 5.50 | 5.5/2.1mm jack to harness female interconnector,38\"",
"INT-MJ-MF-110 | 9.50 | 5.5/2.1mm jack to harness female interconnector,110\"",
"INT-MJ-MF-96 | 9.00 | 5.5/2.1mm jack to harness female interconnector,96\"",
"INT-MJ-MP-36 | 3.00 | 5.5/2.1mm jack to 5.5/2.1mm plug Interconnector,36\"",
"INT-MJ-MP-72 | 6.00 | 5.5/2.1mm jack to 5.5/2.1mm plug Interconnector,72\"",
"INT-MJ-MP-110 | 9.50 | 5.5/2.1mm jack to 5.5/2.1mm plug Interconnector,110\"",
"INT-MJ-MP-120 | 9.50 | 5.5/2.1mm jack to 5.5/2.1mm plug Interconnector,120\"",
"INT-SJ-2SP-12 | 5.00 | DC Cable J2P-30",
"INT-SJ-2SP-16 | 5.00 | 3.5mm Y-CONNECTOR(short-female-male)",
"INT-SJ-2SP-36 | 6.50 | 6.50 DC Cable J2P-900 (100mm)",
"INT-SJ-2SP-60 | 10.00 | 3.5mm Y-CONNECTOR(short-female-female)",
"INT-SM-TM-110 | 3.00 | Small harness male to male interconnector,110\"",
"INT-SF-TM-110 | 3.00 | Small harness female to male interconnector,110\"",
"INT-SF-TM-160 | 10.00 | Small harness female to male interconnector,160\"",
"INT-MF-TM-110 | 9.50 | Harness female to terminal harness male interconnector,110\"",
"INT-SM-TM-36 | 2.30 | Small harness male to male interconnector,36\"",
"INT-SP-02 | 1.50 | 2 inch Interconnector",
"INT-SP-06 | 1.50 | 6 inch Interconnector",
"INT-SP-09 | 1.50 | 9 inch Interconnector",
"INT-SP-12 | 1.80 | 12 inch Interconnector",
"INT-SP-14 | 1.80 | 14 inch Interconnector",
"INT-SP-24 | 1.80 | 24 inch Interconnector",
"INT-SP-36 | 3.80 | 36 inch Interconnector",
"INT-SP-60 | 5.00 | 60 inch Interconnector",
"INT-SP-DL | 1.50 | Direct Interconnector(L)",
"INT-SP-DS | 1.50 | Direct Interconnector(S)",
"INT-TM-TM-44 | 1.50 | Terminal harness female/ male interconnector,44\"",
"INT-TM-TM-52 | 1.65 | Terminal harness male to male interconnector,52\"",
"INT-TM-TM-61 | 1.75 | Terminal harness male to male interconnector,61\"",
"INT-TM-TM-70 | 1.80 | Terminal harness male to male interconnector,70\"",
"INT-TM-TM-80 | 2.10 | Terminal harness male to male interconnector,80\"",
"INT-TM-TM-87 | 2.50 | Terminal harness male to male interconnector,87\"",
"INT-TM-TM-110 | 3.00 | Terminal harness male to male interconnector,110\"",
"AD-EL-2401000 | 35.00 | 100W 24V AC/DC Slim power supply",
"APC-25-350 | 13.80 | 35W Mean Well Constant Current Power Supply",
"APC-25-700 | 11.00 | 25.2W Mean Well Constant Current Power Supply",
"APC-35-700 | 12.50 | 35W Mean Well Constant Current Power Supply",
"APV-8-12 | 7.00 | 8W Mean Well Power Supply",
"CEN-60-12 | 35.00 | 60W 12V AC/DC Meanwell Powersupply",
"CEN-75-24 | 53.00 | 75W 24V AC/DC Meanwell Powersupply",
"CLG-60-24 | 35.00 | 60W 24V AC/DC Meanwell Powersupply",
"ELG-100-24A | 35.00 | 100W 24V AC/DC Meanwell Powersupply",
"ELG-240-24A | 52.00 | 240W 24V AC/DC Meanwell Powersupply",
"HLG-120H-12A | 85.00 | 120W 12V AC/DC Meanwell Powersupply",
"HLG-120H-24V | 85.00 | 120W 24V AC/DC Meanwell Powersupply",
"HLG-150H-12V | 85.00 | 150W 12V AC/DC Meanwell Powersupply",
"HLG-185H-12A | 98.00 | 185W 12V AC/DC Meanwell Powersupply",
"HLG-185H-24A | 98.00 | 185W 24V AC/DC Meanwell Powersupply",
"HLG-240H-12A | 115.00 | 240W 12V AC/DC Meanwell Powersupply",
"HLG-240H-24A | 115.00 | 240W 24V Ac/DC Meanwell Powersupply",
"HLG-320H-12A | 156.00 | 320W 12V AC/DC Meanwell Powersupply",
"HLG-320H-24A | 156.00 | 320W 24V AC/DC Meanwell Powersupply",
"HLG-320H-36A | 156.00 | 320W 36V AC/DC Meanwell Powersupply",
"HLG-600H-12A | 195.00 | 600W 12V AC/DC Meanwell Powersupply",
"HLG-60-24 | 35.00 | 60W 24V AC/DC Meanwell Powersupply",
"HLG-80H-36A | 53.00 | 80W 36V AC/DC Meanwell Powersupply",
"ITRAN-60-12 | 75.00 | 12V DC 60W AC/DC POWER SUPPLY",
"ITRAN-100-12 | 98.00 | 12V DC 100W AC/DC POWER SUPPLY",
"ITRAN-120-12 | 110.00 | 12V DC 120W AC/DC POWER SUPPLY",
"ITRAN-150-12 | 115.00 | 12V DC 150W AC/DC POWER SUPPLY",
"ITRAN-200-12 | 130.00 | 12V DC 200W AC/DC POWER SUPPLY",
"ITRAN-300-12 | 195.00 | 12V DC 300W AC/DC POWER SUPPLY",
"LDF-25D-12 | 35.00 | 25W 12V AC/DC Meanwell Powersupply",
"LPF-60D-12 | 32.00 | 60W 12V AC/DC Meanwell Powersupply",
"LPV-35-12 | 18.00 | 35W 12V AC/DC Meanwell Powersupply",
"LPV-60-12 | 25.00 | 60W 12V AC/DC Meanwell Powersupply",
"LPV-60-24 | 25.00 | 60W 24V AC/DC Meanwell Powersupply",
"LPV-100-12 | 30.00 | 100W 12V AC/DC Meanwell Powersupply",
"LPV-100-24 | 30.00 | 100W 24V AC/DC Meanwell Powersupply",
"LPV-120-12 | 45.00 | 120W 12V AC/DC Meanwell Powersupply",
"LRS-100-12A | 22.00 | 100W 12V AC/DC Meanwell Powersupply",
"LRS-150-12A | 25.00 | 150W 12V AC/DC Meanwell Powersupply",
"LRS-200-12A | 28.00 | 200W 12V AC/DC Meanwell Powersupply",
"LRS-200-24A | 28.00 | 200W 24V AC/DC Meanwell Powersupply",
"LRS-350-12A | 82.00 | 3500W 12V AC/DC Meanwell Powersupply",
"LRS-350-24A | 82.00 | 350W 24V AC/DC Meanwell Powersupply",
"RSP-500-12A | 105.00 | 500W 12V AC/DC Meanwell Powersupply",
"RSP-500-24 | 105.00 | 500W 12V AC/DC Meanwell Powersupply",
"RSP-600-24 | 120.00 | 600W 12V AC/DC Meanwell Powersupply",
"SE-100-12 | 19.00 | 100W 12V AC/DC Meanwell Powersupply",
"SE-450-12 | 65.00 | 450W 12V AC/DC Meanwell Powersupply",
"SE-600-12 | 85.00 | 600W 12V AC/DC Meanwell Powersupply",
"SE-600-24 | 85.00 | 600W 12V AC/DC Meanwell Powersupply",
"SMPS-12R-12 | 12.00 | 12W AC/DC Power supply",
"SMPS-36R-12M | 17.00 | 12V DC 36W SWITCHING MODE POWER SUPPLY,5.5/2.5mm PLUG",
"SMPS-36R-12S | 17.00 | 12V DC 48W SWITCHING MODE POWER SUPPLY,3.5mm PLUG",
"SMPS-48R-12 | 28.00 | 12V DC 36W SWITCHING MODE POWER SUPPLY,3.5mm PLUG",
"SMPS-96A-12 | 68.00 | 12V DC 96W SWITCHING MODE POWER SUPPLY",
"SMPS-96Q-12 | 58.00 | 12V DC 96W SWITCHING MODE POWER SUPPLY",
"SMPS-96Q-24 | 68.00 | 24V DC 96W SWITCHING MODE POWER SUPPLY",
"SMPS-120A-12 | 85.00 | 12V DC 120W SWICHING MODE POWER SUPPLY",
"SMPS-120A-24 | 85.00 | 24V DC 120W SWICHING MODE POWER SUPPLY",
"UP-120-12 | 55.00 | 120W Metal Case Union Power Supply",
"UP-120-12M | 55.00 | 120W Metal Case Union Power Supply",
"UP-60-12 | 48.00 | 60W Metal Case Union Power Supply",
"PT-ST-24TRB | 25.00 | 24\" LINE POWER SM TRACK (Black)",
"PT-ST-48TRB | 28.00 | 48\" LINE POWER SM TRACK (Black)",
"PT-ST-50TRB | 32.00 | 50\" LINE POWER SM TRACK (Black)",
"PT-ST-62TRB | 32.00 | 62\" LINE POWER SM TRACK (Black)",
"PT-ST-72TRB | 35.00 | 72\" LINE POWER SM TRACK (Black)",
"PT-ST-78TRB | 40.00 | 78\" LINE POWER SM TRACK (Black)",
"PT-ST-24TRW | 25.00 | 24\" LINE POWER SM TRACK (White)",
"PT-ST-48TRW | 28.00 | 48\" LINE POWER SM TRACK (White)",
"PT-ST-50TRW | 32.00 | 50\" LINE POWER SM TRACK (White)",
"PT-ST-54TRW | 32.00 | 54\" LINE POWER SM TRACK (White)",
"PT-ST-60TRW | 32.00 | 60\" LINE POWER SM TRACK (White)",
"PT-ST-62TRW | 32.00 | 62\" LINE POWER SM TRACK (White)",
"PT-ST-68TRW | 35.00 | 68\" LINE POWER SM TRACK (White)",
"PT-ST-72TRW | 35.00 | 72\" LINE POWER SM TRACK (White)",
"PWF-LJ-LW-06 | 1.00 | 6\" Power feed(5.5mm Female jack / Lead wire)",
"PWF-LJ-LW-10 | 1.50 | 10\" Power feed(5.5mm Female jack / Lead wire)",
"PWF-LJ-LW-24 | 2.00 | 24\" Power feed(5.5mm Female jack / Lead wire)",
"PWF-LJ-LW-48 | 4.00 | 48\" Power feed(5.5mm Female jack / Lead wire)",
"PWF-LJ-LW-60 | 5.00 | 60\" Interconnector(5.5mm Female jack / Lead wire)",
"PWF-LP-LW-12 | 1.50 | 12\" Power feed(5.5mm Female jack / Lead wire)",
"PWF-LP-LW-26 | 2.50 | 26\" Power feed(5.5mm Female jack / Lead wire)",
"PWF-LW-18ST-1000 | 250.00 | 18 GAGE STRAND UL WIRE,1000FT",
"PWF-LW-20ST-1000 | 185.00 | 20 GAGE STRAND UL WIRE,1000FT",
"PWF-LW-22ST-1000 | 150.00 | 22 GAGE STRAND UL WIRE,1000FT",
"PWF-LT-LW-RGB-2000 | 400.00 | UL1007, 610m/spool, with spool",
"PWF-MF-LW-06 | 1.50 | 6\" Power feed(Harness Female / Lead wire)",
"PWF-MF-LW-48 | 4.00 | 48\" Power feed(Harness Female / Lead wire)",
"PWF-MM-LW-06 | 1.50 | 6\" Power feed(Harness male / Lead wire)",
"PWF-MM-LW-36 | 3.00 | 36\" Power feed(Harness Male / Lead wire)",
"PWF-MM-LW-60 | 5.00 | 60\" Power feed(Harness male / Lead wire)",
"PWF-MM-LW-96 | 8.00 | 96\" Power feed(Harness Male / Lead wire)",
"PWF-MJ-LW-06 | 1.50 | 6\" Power feed(5.5mm Female jack / Lead wire)",
"PWF-MJ-LW-06W | 1.50 | 6\" Power feed(5.5mm Female jack / Lead wire),White",
"PWF-MJ-LW-09 | 1.50 | 9\" Power feed(5.5mm Female jack / Lead wire)",
"PWF-MJ-LW-12 | 1.50 | 12\" Power feed(5.5mm Female jack / Lead wire)",
"PWF-MJ-LW-18 | 1.50 | 18\" Power feed(5.5mm Female jack / Lead wire)",
"PWF-MJ-LW-25 | 2.50 | 25\" Power feed(5.5mm Female jack / Lead wire)",
"PWF-MJ-LW-26 | 2.50 | 26\" Power feed(5.5mm Female jack / Lead wire)",
"PWF-MJ-LW-48 | 4.00 | 48\" Power feed(5.5mm Female jack / Lead wire)",
"PWF-MJ-LW-60 | 5.00 | 60\" Power feed(5.5mm Female jack / Lead wire)",
"PWF-MJ-LW-96 | 8.00 | 96\" Power feed(5.5mm Female jack / Lead wire)",
"PWF-MJ-LW-110 | 9.00 | 110\" Power feed(5.1/2.1 jack / Lead wire)",
"PWF-MP-LW-06 | 1.50 | 6\" Power feed(5.5mm male plug jack / Lead wire)",
"PWF-MP-LW-09 | 1.50 | 9\" Power feed(5.5mm male jack / Lead wire)",
"PWF-MP-LW-12 | 1.50 | 12\" Power feed(5.5mm male plug jack / Lead wire)",
"PWF-PWCD-2P | 1.50 | Powercord 2P",
"PWF-PWCD-3P | 2.00 | Powercord 3P",
"PWF-RF-LW-06 | 1.50 | 6\" Power feed(4 Pin RGB female / Lead wire)",
"PWF-RM-LW-06 | 1.50 | 6\" Power feed(4 Pin RGB male / Lead wire)",
"PWF-LT-RF-LW-72 | 6.00 | RGB Harness female with lead wire,72\"",
"PWF-LT-RGB-10TC-6 | 1.50 | For 10mm RGB Strip with 15cm Wire Lead",
"PWF-LT-RGBF-LW-06 | 1.50 | Female DC connector for RGB, with 6\" wire on one end",
"PWF-RM-LW-72 | 6.00 | RGB Harness male with lead",
"PWF-SJ-CA | 1.00 | CA profile endcap with wire",
"PWF-SJ-CB | 1.00 | CB profile endcap with wire",
"PWF-SJ-LW-06L | 4.00 | 6\" Power feed(3.5mm Female jack / Lead wire),L shape",
"PWF-SJ-LW-12 | 1.50 | 12\" Power feed(3.5mm Female jack / Lead wire)",
"PWF-SJ-LW-18 | 1.50 | 18\" Power feed(3.5mm Female jack / Lead wire)",
"PWF-SJ-LW-20 | 2.00 | 20\" Power feed(3.5mm Female jack / Lead wire)",
"PWF-SJ-LW-24 | 2.00 | 24\" Power feed(3.5mm Female jack / Lead wire)",
"PWF-SJ-LW-36 | 3.00 | 36\" Power feed(3.5mm Female jack / Lead wire)",
"PWF-SJ-LW-48 | 4.00 | 48\" Interconnector(3.5mm Female jack / Lead wire)",
"PWF-SJ-LW-60 | 5.00 | 60\" Power feed(3.5mm Female jack / Lead wire)",
"PWF-SJ-LW-72 | 6.00 | 72\" Power feed(3.5mm Female jack / Lead wire)",
"PWF-SJ-LW-96 | 8.00 | 3.5mm Female Jack/Openwire--2400cm",
"PWF-SP-LW-18 | 2.00 | 18\" Power feed(3.5mm Male plug / Lead wire)",
"PWF-SP-LW-36 | 1.50 | 36\" Power feed(3.5mm Male plug / Lead wire)",
"PWF-SP-LW-96 | 9.00 | 96\" Power feed(3.5mm Male plug / Lead wire)",
"PWF-ST-LJ-12 | 1.50 | SM Track power feed with 5.5/2.5 jack",
"PWF-ST-LW-13 | 2.50 | 13\" Power feed for SM line power track",
"PWF-ST-LW-16 | 2.50 | 16\" Power feed for SM line power track",
"PWF-ST-LW-16B | 2.50 | 16\" Power feed for SM line power track(Black)",
"PWF-ST-LW-18 | 3.00 | 18\" Power feed for line power track",
"PWF-ST-LW-19 | 3.00 | 19\" Power feed for SM line power track",
"PWF-ST-LW-36 | 3.00 | 36\" wire(20#) with SM power trac connector",
"PWF-TF-LW-10 | 1.50 | 10\" Harness female connector with lead wire,10\"",
"PWF-TF-LW-20 | 1.50 | 20\" Harness female connector with lead wire,20\"",
"PWF-TF-LW-36 | 2.00 | 36\" Harness female connector with lead wire,36\"",
"PWF-TM-LW-36 | 2.00 | 36\" Harness male connector for 6 Pin Terminal",
"PWF-TM-LW-48 | 3.00 | 48\" Harness male connector for 6 Pin Terminal",
"PWF-TM-LW-72 | 5.00 | 72\" Harness male connector for 6 Pin Terminal",
"PWF-TM-LW-96 | 7.00 | 96\" Harness male connector for 6 Pin Terminal",
"PWF-TM-LW-110 | 9.00 | 110\" Harness male connector for 6 Pin Terminal",
"PWF-N24-EC | 1.00 | End cap set",
"PWF-N24-ECS | 0.20 | Silicoen End cap",
"PWF-N24-ICSF | 1.50 | Interconnection connector set-F",
"PWF-N24-LC | 2.40 | Interconnection L connector set",
"PWF-N24-PCB | 2.40 | Power supply connector set-Bottom exit",
"PWF-N24-PCI | 2.30 | Power supply connector set-End exit",
"PWF-N24-PCIS | 1.60 | Power supply connector set",
"PWF-N24-PCL | 2.40 | Power supply connector Left set-Side",
"PWF-N24-PCR | 2.40 | Power supply connector Right set-Side",
"PWF-SF-LW-02 | 1.00 | 2\" Power feed(harness Female/Lead wire",
"PWF-SF-LW-06 | 1.20 | 6\" Power feed(Harness Female / Lead wire)",
"PWF-SF-LW-12 | 1.50 | 12\" Power feed(Harness Female / Lead wire)",
"PWF-SF-LW-32 | 2.50 | 32\" Power feed(Harness Female / Lead wire)",
"PWF-SF-LW-48 | 3.00 | 48\" Power feed(Harness Female / Lead wire)",
"PWF-SF-LW-72 | 6.00 | 72\" Power feed(Harness Female / Lead wire)",
"PWF-SF-LW-96 | 9.00 | 96\" Interconnector(Harness Female / Lead wire)",
"PWF-SM-LW-02 | 1.00 | 2\" Power feed (Harness Female / Lead wire)",
"PWF-SM-LW-06 | 1.20 | 6\" Power feed(Harness male / Lead wire)",
"PWF-SM-LW-12 | 1.50 | 12\" Power feed(Harness Male / Lead wire)",
"PWF-SM-LW-32 | 2.50 | 32\" Power feed(Harness Male / Lead wire)",
"PWF-SM-LW-96 | 8.00 | 96\" Power feed(Harness Male / Lead wire)",
"TML-8P-MJ | 9 | 8 Way terminal distributor with 5.5/2.1 female jack",
"TML-6P-LJ | 9 | 6 Way terminal distributor with 5.5/2.5 female jack",
"TML-6P-LW | 9 | 6 Way terminal distributor",
"TML-6P-MF | 9 | 6 Way terminal distributor with harness female",
"TML-6P-MJ | 9 | 6 Way terminal distributor with 5.5/2.1 female jack",
"TML-6P-MM | 9 | 6 Way terminal distributor with harness male",
"TML-6P-SJ | 9 | 6 Way terminal distributor with 3.5mm female jack",
"TML-6PS-LW | 9 | 6 Way terminal distributor with switch hole",
"TML-10P-LJ | 9 | 10 way distributor with 5.5/2.5mm jack,24\"",
"TML-10P-MJ | 9 | 10 way distributor with 5.5/2.1mm jack,"
]

var CustomerList = [
  "3-D Signs",
  "3 B Sign and Neon",
  "3D EXHIBITS",
  "3D Signs",
  "5 Star Wholesale Electric Supply & Lighti",
  "502 Concepts",
  "60 Grit",
  "760 Display",
  "A & R Electric",
  "A. GEO.DIACK",
  "A.G.Machinig",
  "AAAP Promotional Products Inc.",
  "Absolute Exhibits",
  "Absolute Sign",
  "Access Signs",
  "ACE SIGN DESIGN",
  "ACME Made In America",
  "AD Signs",
  "ADIMPACT",
  "ADM works",
  "Alamo Retail Solutions",
  "Alcoa Signage",
  "Alex Castaneda",
  "Alison Strauss",
  "All Around Lighting, Inc.",
  "All Kinds of Signs Inc.",
  "All Star Wholesale Electric & Lighting",
  "ALLAN STORE FIXTURES",
  "Alliance",
  "Allied Lighting",
  "ALPHA & OMEGA DISPLAYS",
  "ALPHA Store Fixtures, INC",
  "Amazing Signs",
  "AMDEN JEWELRY",
  "American Acrylic Display INC",
  "Amotech",
  "AMS LL",
  "Anaheim Hills Jewelry & Coin Mart",
  "Andrade Cabinets",
  "Andres Ramos",
  "Andy Kim",
  "Angel Construction Services, Inc.",
  "ANTHONY WHOLESALE ELECTRIC",
  "ARC Electric",
  "ARCHITECTURAL DESIGN & SIGNS, INC",
  "Arizona Case",
  "Arizona Western Fixture and Display, INC.",
  "Arnel Commercial Properties",
  "Artisian Glass Design",
  "Artistry in Gold",
  "ASTOUND GROUP",
  "Astro Display",
  "ASV Inc",
  "ATT",
  "AUSTIN STORE FIXTURES",
  "B.Y.B TRADING",
  "Band sign system",
  "Bardon Cabinetry",
  "Bargain Store Equipment",
  "Barton Sign Fab",
  "Bayview Plastic Solutions",
  "Beauty College",
  "Beaver Exhibit Inc.",
  "Beemak",
  "Bella Tile",
  "Best Home Interior Design",
  "Better signs & Services",
  "Bishop Store Fixture and Millwork",
  "BK signs",
  "Blade Gallery",
  "Blake Sign Company Inc.",
  "Blaze Electric & Service Company",
  "Blueview Elec-optic Tech Co., Ltd.",
  "Bock Craft Metal",
  "Bock Craft Metal & Exterior Design",
  "BONAGE USA LLC",
  "Boomers",
  "BP Built",
  "BRAIN NELSON",
  "Brigade",
  "BRISTOL CELLULAR, INC.",
  "Britex Engineering Ltd",
  "Brixen & Sons",
  "Bruna Ferrari Bead",
  "Bruno Bomis",
  "Builders Surplus, Inc.",
  "Burgin",
  "C&B Displays",
  "C&M Products",
  "C.B. Summer Construction Co. Inc.",
  "C3 Lighting Solutions, Inc",
  "C3 Signs",
  "Cabinet Magic",
  "Cabinets Expo & Window",
  "Cal West Signs",
  "CALIFORNIA QUALITY PLASTICS",
  "CALWEST SIGNS",
  "CANOGA ELECTRIC SUPPLY CO",
  "Capitol Neon",
  "Capitol Store Fixture",
  "Carmel at Woodbury",
  "Casco Pet",
  "Casey King",
  "Cash Strauss",
  "CDC exhibits",
  "CED Nunn Electrical Distrubutors",
  "CEES SMIT",
  "Celco Manufacturing",
  "CFS Millswork",
  "Chandler Sign",
  "Chiapparelli Inc.",
  "CHOURA EVENTS",
  "Clever Home & Yacht",
  "Coast sign",
  "Coastal Sign",
  "CoGent Signs",
  "Come Signn In",
  "Complete Store Fixtures",
  "Compu-Signs",
  "Concept Displays Inc.",
  "Conserve-A-Watt",
  "CONTINENTAL DISPLAY INC",
  "CONTINENTAL STORE FIXTURES",
  "Contrast Media",
  "Cornerstone Display Group",
  "Creative Kitchen & Bath",
  "Crescent Electric Supply",
  "Crescent Pacific, Inc.",
  "CUSTOM CLOSETS",
  "Czarnowski",
  "D'AMATI FINE JEWELRY",
  "D'Andrea Visual Communications",
  "D&P CUSTOM LIGHTS & WIRING SYSTEMS INC.",
  "D&S Signs",
  "Daniel's Jewelers",
  "Daniels Display Company",
  "Danite Sign Co.",
  "Danny's Signs",
  "DARIO JEWELERS",
  "Del amo Image",
  "Delta Exhibitions",
  "Desart",
  "Design by Kelarice",
  "DESIGN IMAGES",
  "Detroit Store Fixtures",
  "Direct Edge",
  "Direct LED Frames",
  "Disciple Built",
  "Display by Design",
  "display fabrication group",
  "Display Plus Inc.",
  "Display Warehouse Inc.",
  "Displayit Inc.",
  "Displays & Holders",
  "Displays by Design",
  "Displays By Jack",
  "Distek, Inc.",
  "DN SIGNS",
  "Don Roberto Jewelers",
  "Donco and Sons, Inc.",
  "DONGGUAN DAWANG MACHINERY EQUIPMENT",
  "Double R Display",
  "DSA. Phototech",
  "Dynamic Display Systems",
  "Earth And Water",
  "EASIGO",
  "EC Retail",
  "EC Retail Studio",
  "Econo Display",
  "Electricore Signs",
  "Ellis & Ellis Sign Systems",
  "Elro Signs",
  "Empire Maintenance",
  "EnK Custom Display",
  "ESI Services",
  "ET Custom Sign & Design",
  "Evans Sign",
  "EWI",
  "Exhibit Option",
  "Exhibitree, Inc",
  "Expedition Sign Inc.",
  "Expo Services",
  "Express Jewelry",
  "EXPRESS SIGN & NEON",
  "FABRICADORES DE ALUMINO",
  "Fairway Holdings",
  "FAST FIX JEWELRY",
  "FASTSIGNS® of American Canyon",
  "Federal Heath Sign Company",
  "Felbro Display",
  "Final Phase Construction, Inc.",
  "Finn Retail",
  "First & Main Signage for Modern Brands LL",
  "Fisher & Paykel Appliances, Inc.",
  "Floors Next Day",
  "Forward Sign",
  "Freddie G Production",
  "Freehand Sign Co",
  "FSG",
  "FTC INSTALLATION INC.",
  "FX SIGNS",
  "Gardena Electric",
  "GAVRIELI",
  "Gemini Sign Products",
  "GentLA",
  "GEORGE P. JOHNSON",
  "Glen Hager",
  "GO DESIGN & DISPLAY, INC",
  "Go2Cellairis",
  "Golden Gate Sign Co",
  "Granite Creek Electric",
  "Graphical Dimensions",
  "Great Spaces USA",
  "GreveCo Displays and Exhibits",
  "Grid Exhibition Service",
  "Gridot Exhibit LLC",
  "Gumme Diamonds & Jewelry",
  "Gus Signs",
  "Hanmi Sign",
  "Harbor Sign",
  "Harbor Wholesale Elect",
  "Harkins Theatres",
  "HD Fullerton Construction Inc",
  "Hill Display",
  "Hilton",
  "Hippo",
  "Ho's remodel corp.",
  "Horizon Lighting",
  "IAK Wholesale",
  "Ibex Cleaning Services",
  "Icon Design",
  "Idaho electric signs",
  "Ideal Lighting Supply",
  "Identity Sign Group Inc",
  "IDI Electric LLC",
  "IKON SIGNS.",
  "Illuminated Light Panels",
  "Illuminated Products",
  "Image Options",
  "Impact-XM",
  "Indicom Electric Co",
  "INLINE",
  "INSTANT NEON SIGN AND ELECTRICAL",
  "Instant Signs Cypress, LLC",
  "Instore Design Display",
  "INTERSTATE ELECTRIC CO.",
  "Intrigue jewelers",
  "Intrigue Jewelry",
  "Irvine Printing & Display",
  "Ivar's Displays",
  "J and J",
  "James Gartner & Associates Architects",
  "Jeffery Rome and Associates",
  "Jejjoni Sign Manufacturing",
  "Jendayi Collection",
  "Jewelry Exchange",
  "JF Fixtures",
  "JH Cabinet",
  "Jim Mitchell",
  "JM Kitchen Cabinet Co.",
  "Joe Gartner",
  "John's Installations",
  "John Barrett",
  "Johnson Electric Co.",
  "Jolin Electrical Maintenance & Service",
  "JP Electric",
  "JPAK LED",
  "JPS Design",
  "Just for Show INC",
  "JYE'S International, Inc.",
  "K 2 Sign",
  "K.M. Lighting",
  "K2 Fabrication and Design",
  "KB Surgical Center",
  "KC STORE FIXTURES",
  "Kendra Scott",
  "Kevin's Presentation",
  "Kevin Riggs Builder, Inc.Shipping",
  "KIEFFER & CO. INC.",
  "KIM BON JUN SIGN INC",
  "Kim Khanh Gift Shop",
  "KMR Pro.",
  "KNJ Display",
  "Koin Enterprises",
  "LA Digital Graphics",
  "LAMP",
  "Las Vegas Lighting Inc",
  "Lawndale Jewelry and loan",
  "LED ENTERPRISE INC",
  "LED USA",
  "LEED Green Associate",
  "LIGHT BULB ETC/Montclair",
  "Light Bulbs & More",
  "Light Bulbs etc",
  "Light Bulbs ETC/Lightstyles",
  "Light Bulbs Unlimited",
  "Lucky Signs",
  "Lucky Store Fixture",
  "Luis",
  "Luxary Lighting",
  "MAC and TEA",
  "Macy's",
  "Mag-Trol L.B.,LLC",
  "Magnolia Electric",
  "MAGNUM DESIGN GROUP",
  "Main Electric Supply",
  "Main Place Lighting",
  "MAJESTIC LIGHTING",
  "Mancraft Industries",
  "Marble/ Unlimited",
  "Martin Furniture",
  "Maximum Sign Co",
  "Maximum Visibility",
  "MCOR Lighting",
  "MEIGA SUSHI",
  "Meritage Homes",
  "Metro Commercial Construction",
  "Meyer Sign Company of Oregon",
  "Midas convention service Inc",
  "Mike Dore",
  "MJB Supply, LLC",
  "Modotech Design & Fabrication Inc",
  "Monster Signs LLC",
  "Moon International Inc.",
  "MORALES SIGNS & GRAPHICS",
  "Morales Signs and Graphics",
  "Motif Events",
  "MSI",
  "MT Exhibits LLC",
  "Nakamura-Beeman",
  "Narrow mountain Products",
  "National Mall Front & Design",
  "Nayoung Yu",
  "NBrand Signs CO.",
  "NC  Builders ",
  "NEC Building Services",
  "NEON",
  "Nest Experiential",
  "Newtech Display",
  "NicoNat",
  "Nimlok",
  "Noco",
  "Norse Manufacturing",
  "Northshore Creative Group",
  "OAK-IT Inc.",
  "OC Electrical Services",
  "OCP Construction",
  "Off The Wall Co.",
  "Old California Lighting",
  "One Source Industries",
  "Orange County Industrial Plastics",
  "Orange Display",
  "Orange Pico",
  "Orion Inc",
  "OROZCO INC",
  "OUTDOOR DIMENSIONS",
  "Pacific Coast Sign Supply",
  "Pacific Panel",
  "Pacific Prestige Properties",
  "Pacific Store Designs",
  "Palmer Promotional Products",
  "Pan-Oston",
  "Patrick Kincaid",
  "Patterson Signs",
  "Permier Pain Consultants",
  "PF Cali LLC",
  "Photo Booth Supply Co.",
  "Piece Maker",
  "Pinnacle Exhibits",
  "Pinnacle Sign Systems",
  "pl",
  "PLAN A EXPOSITION INC",
  "Platinum Lighting LLC",
  "POP 82",
  "POSC Design Company",
  "Preferred Project",
  "Premier Display & Exhibit",
  "PREMIER FIXTURE AND DISPLAY",
  "PREMIER SOURCE,INC",
  "Premiere Rack Solution",
  "Premium Quality Lighting",
  "Presentation Media Inc",
  "Primary Color",
  "Prime Expo",
  "Pro Exhibits",
  "Prodigy Group",
  "Production Resource Group",
  "Profab Signs, LLC",
  "Professional Retail Outlet Services",
  "Promotional Signs",
  "Punch Inc.",
  "purpose",
  "Purpose Supply Co",
  "QED Electrical Supply",
  "R&A Enterprises",
  "R.B.SIGNS INC",
  "R.E. Wholesale Lighting",
  "Ralph Jones Display",
  "RAMOS WOODWORKS LLC",
  "Randal Retail Group, Inc",
  "RB sign",
  "RC Mechanical",
  "RC NEON",
  "RCSIGNS",
  "Reborn Cabinets Inc.",
  "Regency Lighting",
  "REITZ ELECTRIC SERVICE INC.",
  "Resco Electric, Inc.",
  "Residential Development Inc.",
  "Retail Electrical",
  "RetailOne",
  "Rexel",
  "Rhino Electric",
  "Rich Limited",
  "Rick's Signs",
  "RJ MANUFATURING",
  "RNS Channel letters",
  "Rodgers-Wade",
  "Room Service Interiors",
  "Royal Custom Designs",
  "Royal Lighting",
  "Royal Wholesale Electric",
  "RSM Facility Solutions",
  "Russ Andrade Custom Cabinets",
  "Saks Fifth Ave.",
  "SAMSUNG SIGN CO",
  "Sandbox Sign Co",
  "Santa Cruz Industries, Inc.",
  "SAV-ON FIXTURE",
  "SC Construction Corp",
  "SE Display",
  "Seafood City",
  "Serrano Printing",
  "Sgns By Neil",
  "Sheets Contracting Inc",
  "Shergill enterprises llc",
  "Sherwood Management Company",
  "Show offs Display Inc.",
  "Showcase Components",
  "Shryne Group",
  "Sign-Mart",
  "Sign Designs",
  "Sign Done Fast",
  "Sign Haus",
  "Sign Industries",
  "SIGN ONE DESIGN & SERVICES",
  "Sign Resource",
  "Sign Spots",
  "Sign Studio",
  "Sign Technics & Grapfixs",
  "SignComm",
  "Signmakers",
  "SIGNS EXPRESS",
  "Signs International Distributor Corp",
  "Signtopia",
  "Signum",
  "SJ Lighting Inc.",
  "SJP SIGNS INC.",
  "Sky Factory",
  "SMC",
  "SMUN, Inc.",
  "So Cal Handyman Services",
  "Soliddd Corp",
  "South California Electric Supplies",
  "Southwest Sign Co.",
  "Southwest Sign Maintenance",
  "SPACE DESIGN & DISPLAY",
  "Spark Retail Solutions Inc.",
  "Sparks",
  "Special Signs",
  "Specialized Marketing international",
  "Speed Quality Signs",
  "SRS FABRICATION INC.",
  "STANFORD SIGN & AWING,INC",
  "Star Design",
  "Steam Puff",
  "Steelhead Productions",
  "STELLAR KITCHEN SOLUTIONS",
  "STEVE HANAVER",
  "Sticky Battle Creek",
  "Stone Age",
  "STORE FIXTURES",
  "Strategic 10",
  "STUART BENJAMIN & CO",
  "Studio Concepts",
  "Sungmin ELC",
  "Superior Display",
  "Superior Electrical Advg",
  "Superior Signs and Neon",
  "Synergy Custom Fixtures",
  "Tae Gwang Inc",
  "Taft Electric Company",
  "Tako Tyko",
  "Taylor Design",
  "TC Custom Design",
  "TDI Signs",
  "TEBO DESIGN & FIXTURE",
  "Tecno Display",
  "Tectonics",
  "TEE EDGE / Concept Displays",
  "TEMEKA",
  "TFN Architectural Signage",
  "The ADART Company",
  "The Bernard Group",
  "The create people",
  "The Creative Eyewear",
  "The Display Builders",
  "THE GREAT ORGANIZATION",
  "The Lighting Gallery",
  "The Scenic Express",
  "The Tipsy Robot",
  "Thomas Swan Sign Inc.",
  "Todd Trenchard",
  "TOM General Construction LLC",
  "Top-Shelf Fixtures, LLC",
  "Total Display Fixture",
  "TP International",
  "TPL Exhibit LLC",
  "TRAC VALERIE BUNDARIN",
  "Travis Mathew",
  "Trilogy Signs & Advertising",
  "Tucson Store Fixture",
  "Turtle & Hughes Inc.",
  "Tyler Lighting Services, Inc.",
  "ULTIMATE ACRYLICS",
  "Underground Sign Solution",
  "United Sign Systems",
  "Universal Carpet",
  "Universal Custom Display",
  "University of Southern California",
  "UNIWEB, INC.",
  "USCMABO",
  "Valley Signs & Lighting Inc",
  "Velacci Group Inc",
  "VERIDA SIGNS",
  "Victory Diaplay",
  "visio",
  "Vision Sign, INC.",
  "Visual Marketing Resource",
  "VN Signs Factory",
  "Walters Wholesale Electric Co.",
  "Walters/Corona",
  "Watson Electrical Construction Co.",
  "Wearecircle",
  "Wert Fixture & Display",
  "Wesco Signs",
  "West Coast Pops",
  "Western Sign",
  "WESTERN SIGN AND AWNING",
  "Westside Wholesale Electric & Lighting I",
  "Westwood Wholesale Electric",
  "Westwood Wholesale Electric Co",
  "WG Signs CO",
  "Wholesale Sign Builder",
  "Wholesale Sign Manufacturer Company",
  "WISE OWL EXHIBITS",
  "Woods Electric",
  "Woven Wood",
  "Woworking Display",
  "Xibit Solutions",
  "Xpert Exposition Services",
  "YESCO",
  "Zee sign systems Inc",
  "ZION CABINETS,INC.",
  "Zuni Signs"
]

class tapes_ {
  constructor(name, short, type, price, description) {
    this.name = name;
    this.short = short;
    this.type = type;
    this.price = price;
    this.description = description;
  }
}

class profiles_ {
  constructor(name, short, type, price, description) {
    this.name = name;
    this.short = short;
    this.type = type;
    this.price = price;
    this.description = description;
  }
}

class wires_ {
  constructor(name, short, type, price, description) {
    this.name = name;
    this.short = short;
    this.type = type;
    this.price = price;
    this.description = description;
  }
}

class contents_ {
  constructor(name, description, price, quantity, total, button) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.total = total;
    this.button = button;
  }
}

class products_ {
  constructor(name, price, description, type) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.type = "W";
  }
}

class customers_ {
  constructor(name) {
    this.name = name;
    this.price = 0;
    this.description = "";
    this.type = "W";
  }
}

class Tapes {
  constructor() {
    this.array = [];
    for (let i = 0; i < tapeString.length; i++) {
      let des_ = "";
      let type_ = "";
      const myArray = tapeString[i].split("|");
      for (let i = 3; i < myArray.length; i++) {
        des_ = des_ + myArray[i] + " ";
      }
      if (myArray[0][0] == 'F') {
        type_ = "FR4";
      }
      else {
        type_ = "LED Tape"
      }
      this.array[i] = new tapes_(myArray[0].trim(), myArray[1].trim(), type_, myArray[2].trim(), des_);
    }
  }
}

class Profiles {
  constructor() {
    this.array = [];
    for (let i = 0; i < profileString.length; i++) {
      let des_ = "";
      let type_ = "";
      const myArray = profileString[i].split("|");
      for (let i = 3; i < myArray.length; i++) {
        des_ = des_ + myArray[i] + " ";
      }
      if (myArray[0][0] == 'A') {
        type_ = "LED Tape";
      }
      else {
        type_ = "FR4";
      }
      this.array[i] = new tapes_(myArray[0].trim(), myArray[1].trim(), type_, parseFloat(myArray[2].trim()), des_);
    }
  }
}

class Wires {
  constructor() {
    this.array = [];
    for (let i = 0; i < wireString.length; i++) {
      let des_ = "";
      let type_ = "";
      const myArray = wireString[i].split("|");
      for (let i = 3; i < myArray.length; i++) {
        des_ = des_ + myArray[i] + " ";
      }
      type_ = "W";
      this.array[i] = new tapes_(myArray[0].trim(), myArray[1].trim(), type_, parseFloat(myArray[2].trim()), des_);
    }
  }
}

class Products {
  constructor() {
    this.array = [];
    for (let i = 0; i < productString.length; i++) {
      let des_ = "";
      const myArray = productString[i].split("|");
      for (let i = 2; i < myArray.length; i++) {
        des_ = des_ + myArray[i] + " ";
      }
      this.array[i] = new products_(myArray[0].trim(), parseFloat(myArray[1].trim()), des_);
    }
  }
}

class Customers {
  constructor() {
    this.array = [];
    for (let i = 0; i < CustomerList.length; i++) {
      this.array[i] = new customers_(CustomerList[i]);
    }
  }
}

class Tables {
  constructor() {
    this.array = [];
    this.deletes = [];
  }
}

let tape = new Tapes();
let profile = new Profiles();
let wire = new Wires();
let table = new Tables();
let product = new Products();
let customer = new Customers();
let clicked = false;
let totCost = 0;

function printHelper() {

  var popOut = window.open('', 'INSEM Lightbox Quote', 'width=1080px,height=2160');
  var doc = popOut.document;
  doc.open();
  doc.write("<link href=\"style.css\" rel=\"stylesheet\" type=\"text/css\" />");
  //addEventListener("load", () => { print(); popOut.onafterprint = function() { popOut.close(); } })

  //doc.write(document.getElementById("line").outerHTML);

  popOut.onload = function() {
    popOut.print();
  }
  popOut.onafterprint = function() {
    popOut.close();
  }

  doc.write(document.getElementById("base").outerHTML);
  console.log(document.getElementById("base").outerHTML);
  doc.write(document.getElementById("customer").outerHTML);
  // console.log(document.getElementById("name").outerHTML);
  // doc.write(document.getElementById("cost").outerHTML);
  // doc.write(document.getElementById("name").outerHTML);
  // doc.write(document.getElementById("description").outerHTML);
  // doc.write(document.getElementById("price").outerHTML);
  // doc.write(document.getElementById("quantity").outerHTML);
  // doc.write(document.getElementById("totalPrice").outerHTML);
  doc.title = "INSEM Lightbox Quote";

  doc.close();
}

function printHelp(name, description, price, quantity, total) {

  let deleteButton = document.createElement("SPAN");
  deleteButton.innerHTML = "<br> Delete";
  deleteButton.className = "DeleteButton";
  // deleteButton.style.display = "inline-block";

  deleteButton.addEventListener("click", function() {
    let deleteIndex = 0;
    for (let i = 0; i < table.deletes.length; i++) {
      if (table.deletes[i] == this) {
        deleteIndex = i;
      }
    }
    // var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    // audio.play();
    this.parentNode.removeChild(this);
    table.deletes.splice(parseInt(deleteIndex), 1);
    table.array.splice(parseInt(deleteIndex), 1);
    updateTable();
  });

  table.deletes.push(deleteButton);
  document.getElementById("delete").appendChild(deleteButton);
  table.array.push(new contents_(name, description, price, quantity, total, deleteButton));
  updateTable();
}

function updateTable() {
  clearTable();
  totCost = 0;
  if (document.getElementById("customerInput").value != "") {
    document.getElementById("customer").innerHTML = "Customer Name: " + document.getElementById("customerInput").value;
  }
  else {
    document.getElementById("customer").innerHTML = "";
  }
  for (let i = 0; i < table.array.length; i++) {
    if (i == 0) {
      document.getElementById("name").innerHTML += "<br>";
      document.getElementById("description").innerHTML += "<br>";
      document.getElementById("price").innerHTML += "<br>";
      document.getElementById("quantity").innerHTML += "<br>";
      document.getElementById("totalPrice").innerHTML += "<br>";
    }
    let totalRound = Math.round(parseFloat(table.array[i].total) * 100) / 100;
    totCost += totalRound;
    let text = document.createElement("DIV");
    text.innerHTML = table.array[i].name;
    // console.log(table.array[i].name);
    text.id = i;
    editText(text, 0);
    document.getElementById("name").appendChild(text);

    text = document.createElement("DIV");
    text.innerHTML = table.array[i].description;
    document.getElementById("description").appendChild(text);

    text = document.createElement("DIV");
    text.innerHTML = "$" + parseFloat(table.array[i].price).toFixed(2);
    text.id = i;
    editText(text, 2);
    document.getElementById("price").appendChild(text);

    text = document.createElement("DIV");
    text.innerHTML = table.array[i].quantity;
    text.id = i;
    editText(text, 1);
    document.getElementById("quantity").appendChild(text);

    text = document.createElement("DIV");
    text.innerHTML = "$" + totalRound.toFixed(2);
    document.getElementById("totalPrice").appendChild(text);
  }
  let totHold = totCost;
  let discount = 0;
  if (document.getElementById("discountType").value != "None" && parseFloat(document.getElementById("Discount").value) > 0) {
    if (document.getElementById("discountType").value == "Percent") {
      discount = (totCost * 0.01 * parseFloat(document.getElementById("Discount").value));
      totCost = (totCost - discount);
    }
    else {
      discount = parseFloat(document.getElementById("Discount").value);
      totCost = (totCost - discount);
    }
  }
  totCost = totCost.toFixed(2);
  if (totCost < 0) {
    totCost = 0;
    discount = totHold;
  }
  totalCost(discount);
}

function totalCost(discount) {
  document.getElementById("cost").innerHTML = "Total Cost: $" + totCost;
  if (document.getElementById("discountType").value != "None") {
    document.getElementById("cost").innerHTML += "<br> Discounted Cost: $" + discount.toFixed(2);
  }
}

function autocomplete(text, option) {
  const triggers = ["input", "click"];
  for (let i = 0; i < triggers.length; i++) {
    text.addEventListener(triggers[i], function() {
      //console.log(text.value);
      clicked = true;
      var currentElements = document.getElementsByClassName("autocomplete-items");
      for (let i = 0; i < currentElements.length; i++) {
        currentElements[i].parentNode.removeChild(currentElements[i]);
      }
      var dropdown = document.createElement("DIV");
      dropdown.setAttribute("id", "dropdownParent");
      dropdown.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(dropdown);
      let displayType = dropdown.style.display;
      let orderType = "";

      let obj = document.getElementById("profileInput");
      let profileName = obj.value;
      obj = document.getElementById("tapeInput");
      let tapeName = obj.value;

      for (let i = 0; i < profile.array.length; i++) {
        if (profile.array[i].name == profileName) {
          orderType = profile.array[i].type;
        }
      }
      for (let i = 0; i < tape.array.length; i++) {
        if (tape.array[i].name == tapeName) {
          orderType = tape.array[i].type;
        }
      }
      for (let i = 0; i < option.array.length; i++) {
        if (option.array[i].name.substr(0, this.value.length).toUpperCase() == this.value.toUpperCase()) {
          if (orderType != "") {
            if (option.array[i].type != orderType && option.array[i].type != "W") {
              continue;
            }
          }
          let dropdownElement = document.createElement("DIV");
          dropdownElement.accessKey = option.array[i].name;
          dropdownElement.innerHTML = option.array[i].name + " : " + option.array[i].description;
          dropdownElement.setAttribute("id", "dropdownElements");
          dropdownElement.addEventListener("mousedown", function() {
            var curElements = document.getElementsByClassName("autocomplete-items");
            for (let i = 0; i < curElements.length; i++) {
              curElements[i].parentNode.removeChild(curElements[i]);
            }
            text.value = this.accessKey;



            // curElements = document.getElementsByClassName("editing");
            // if(curElements.length != 0)
            // {
            //   curElements[0].parentElement.innerHTML = this.accessKey;  
            // }
          });
          dropdown.appendChild(dropdownElement);
        }
      }
      if (dropdown.children.length == 0) {
        dropdown.style.display = "none";
      }
      else {
        dropdown.style.display = displayType;
      }
    });
  }
}

function editText(text, num) {
  text.addEventListener("click", function() {
    if (text.className != "Clicked") {
      console.log(text.className);
      text.className = "Clicked";
      var textBox = document.createElement("INPUT");
      textBox.setAttribute("type", text);
      textBox.setAttribute("value", text.innerHTML);
      if (num == 0) {
        autocomplete(textBox, product);
      }
      if(this.innerHTML == " ")
      {
        textBox.setAttribute("value", "");
      }
      if(num == 2)
      {
        let index = parseInt(text.id);
        textBox.setAttribute("value", table.array[index].price);
      }
      this.innerHTML = "";
      textBox.addEventListener("focusout", function() {
        text.innerHTML = this.value;
        text.className = "";
        if (this.value == "") {
          text.innerHTML = " ";
        }
        if (num == 0) {
          let productIndex = testValid(product.array, this.value);
          let index = parseInt(text.id);
          if (productIndex != null) {
            console.log("Hello")
            table.array[index].description = product.array[productIndex].description;
            table.array[index].price = product.array[productIndex].price;
            table.array[index].name = product.array[productIndex].name;
            table.array[index].total = product.array[productIndex].price * table.array[index].quantity;
          }
        }

        if(num == 1)
          {
            let index = parseInt(text.id);
            table.array[index].quantity = parseInt(this.value);
            table.array[index].total = table.array[index].price * parseInt(this.value);
          }

        if(num == 2)
        {
          let index = parseInt(text.id);
          table.array[index].price = parseInt(this.value);
          table.array[index].total = table.array[index].quantity * parseInt(this.value);
        }
        
        updateTable();
        this.remove();
      });
      textBox.style.width = "3cm";
      textBox.addEventListener("keypress", function(e) {
        var keyCode = e.keyCode;

        if (keyCode == 13) {

          // console.log("Hello");
          text.innerHTML = this.value;
          text.className = "";
          if (this.value == "") {
            text.innerHTML = " ";
          }

          if (num == 0) {
            let productIndex = testValid(product.array, this.value);
            let index = parseInt(text.id);
            if (productIndex != null) {
              table.array[index].description = product.array[productIndex].description;
              table.array[index].price = product.array[productIndex].price;
              table.array[index].name = product.array[productIndex].name;
              table.array[index].total = product.array[productIndex].price * table.array[index].quantity;
            }
          }
          if(num == 1)
          {
            let index = parseInt(text.id);
            table.array[index].quantity = parseInt(this.value);
            table.array[index].total = table.array[index].price * parseInt(this.value);
          }

          if(num == 2)
        {
          let index = parseInt(text.id);
          table.array[index].price = parseInt(this.value);
          table.array[index].total = table.array[index].quantity * parseInt(this.value);
        }

          updateTable();
          this.remove();
        }

      });
      this.appendChild(textBox);
      textBox.focus();
    }
  });
}

function onDocLoad() {
  deleteTable();
  document.getElementById("DiscountText").style.display = "none";
  document.getElementById("DiscountText").addEventListener("input", function() {
    updateTable();
  });
  document.getElementById("discountType").addEventListener("click", function() {
    updateTable();
  });
  document.addEventListener("click", function(e) {
    if (clicked) {
      clicked = false;
      return;
    }
    if (document.getElementById("discountType").value == "None") {
      //console.log("Heo");
      document.getElementById("DiscountText").style.display = "none";
    }
    else {
      document.getElementById("DiscountText").style.display = "initial";
    }
    var currentElements = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < currentElements.length; i++) {
      currentElements[i].parentNode.removeChild(currentElements[i]);
    }
    if (document.getElementById("wireLengthR").value == "Other") {
      document.getElementById("wireRightOther").style.display = "initial";
    }
    else {
      document.getElementById("wireRightOther").style.display = "none";
    }
    if (document.getElementById("wireLengthL").value == "Other") {
      document.getElementById("wireLeftOther").style.display = "initial";
    }
    else {
      document.getElementById("wireLeftOther").style.display = "none";
    }
  });
  autocomplete(document.getElementById("tapeInput"), tape);
  autocomplete(document.getElementById("profileInput"), profile);
  autocomplete(document.getElementById("wireInputR"), wire);
  autocomplete(document.getElementById("wireInputL"), wire);
  autocomplete(document.getElementById("productInput"), product);
  autocomplete(document.getElementById("customerInput"), customer);

  
}

function deleteTable() {
  clearTable();
  totCost = 0;
  while (table.array.length > 0) {
    table.array.pop();
  }
  while (table.deletes.length > 0) {
    document.getElementById("delete").removeChild(table.deletes.pop());
  }
  
   printHelp(" ", " ", " ", 0, 0);
  printHelp(" ", " ", " ", 0, 0);
  printHelp(" ", " ", " ", 0, 0);
  printHelp(" ", " ", " ", 0, 0);
  printHelp(" ", " ", " ", 0, 0);
  totalCost();
  //console.log(table.array.length);
}

function clearTable() {
  document.getElementById("name").innerHTML = "Item<br>";
  document.getElementById("description").innerHTML = "Description<br>";
  document.getElementById("quantity").innerHTML = "Quantity<br>";
  document.getElementById("price").innerHTML = "Price<br>";
  document.getElementById("totalPrice").innerHTML = "Total<br>";
}

function testValid(array, name) {
  let tapeIndex = null;
  for (let i = 0; i < array.length; i++) {
    if (name == array[i].name) {
      tapeIndex = i;
      break;
    }
  }
  return tapeIndex;
}

function addEstimate() {

  let obj = document.getElementById("quantityInput");
  let quantity = obj.value;
  obj = document.getElementById("tapeInput");
  let tapeName = obj.value;
  obj = document.getElementById("profileInput");
  let profileName = obj.value;
  obj = document.getElementById("wireInputR");
  let wireNameR = obj.value;
  obj = document.getElementById("wireInputL");
  let wireNameL = obj.value;
  obj = document.getElementById("wireLengthR");
  let wireLengthR = parseFloat(obj.value);

  if (obj.value == "Other") {
    wireLengthR = parseFloat(document.getElementById("wireRightOther").value);
  }
  obj = document.getElementById("wireLengthL");
  let wireLengthL = parseFloat(obj.value);
  if (obj.value == "Other") {
    wireLengthL = parseFloat(document.getElementById("wireLeftOther").value);
  }
  obj = document.getElementById("lengthInput");
  let profileLength = Math.round(parseFloat(obj.value) * 100) / 100;

  let length = parseInt(profileLength / 6) + 1;
  if (profileLength % 6 == 0) {
    length--;
  }
  let wireLRound = parseInt(wireLengthL / 6) + 1;
  if (wireLRound % 6 == 0) {
    wireLRound--;
  }
  let wireRRound = parseInt(wireLengthR / 6) + 1;
  if (wireRRound % 6 == 0) {
    wireRRound--;
  }
  //Checking if the inputs exist
  document.getElementById("errors").innerHTML = "";
  let error = "";
  if (quantity < 1 || quantity % 1 != 0) {
    error += "Quantity must be at least 1, and a whole number"
  }
  if (profileLength < 6 || profileLength % 1 != 0) {
    error += "Tape Length must be greater than 6, and a whole number <br>";
  }
  if ((wireNameL != "" && wireLengthL < 2) || wireLengthL % 1 != 0) {
    error += "Left Wire length must be greater than 2 if there is a left wire <br>";
  }
  if ((wireNameR != "" && wireLengthR < 2) || wireLengthR % 1 != 0) {
    error += "Right Wire length must be greater than 2 if there is a right wire <br>";
  }
  let tapeIndex = testValid(tape.array, tapeName);
  if (tapeIndex == null) {
    error += "Invalid Tape Name <br>";
  }
  let profileIndex = testValid(profile.array, profileName);
  if (profileIndex == null && profileName != "") {
    error += "Invalid Profile Name <br>";
  }
  if (tapeIndex != null && profileIndex != null) {
    if (profile.array[profileIndex].type != tape.array[tapeIndex].type && profileName != "") {
      error += "Profile and Tape Type do not Match";
    }
  }
  let wireIndexL = testValid(wire.array, wireNameL);
  if (wireIndexL == null && wireNameL != "") {
    error += "Invalid Left Wire Name <br>";
  }
  let wireIndexR = testValid(wire.array, wireNameR);
  if (wireIndexR == null && wireNameR != "") {
    error += "Invalid Right Wire Name <br>";
  }
  if (error != "") {
    document.getElementById("errors").innerHTML = error;
    return;
  }

  let powerPrice = parseInt(0);

  let itemName = "NA" + profileLength + "N-";
  let itemDescription = (profileLength) + "\" of " + tape.array[tapeIndex].name;
  if (profileName != "") {
    itemName = profile.array[profileIndex].short + profileLength;
    if (document.getElementById("profileCover").value == "Frosted") {
      itemName += "F-";
    }
    else {
      itemName += "N-";
    }
    itemDescription = (profileLength) + "\" of " + tape.array[tapeIndex].name + " in " + profile.array[profileIndex].name;
  }

  itemName += tape.array[tapeIndex].short;

  let wireLStr = "" + wireLengthL;
  let wireRStr = "" + wireLengthR;

  if(wireLengthL < 10)
  {
    wireLStr = "0" + wireLStr;
  }
  if(wireLengthR < 10)
  {
    wireRStr = "0" + wireRStr;
  }
  
  if (wireNameR != "" && wireNameL != "") {
    itemDescription += " with " + wireLengthL + "\" " + wireNameL + " / " + wireLengthR + "\" " + wireNameR;
    itemName += "-" + wireLStr + wire.array[wireIndexL].short + wireRStr + wire.array[wireIndexR].short;
    powerPrice += 2 + wireRRound / 2 + wireLRound / 2;
  }
  else if (wireNameR != "") {
    itemDescription += " with " + wireLengthR + "\" " + wireNameR;
    powerPrice += 1 + wireRRound / 2;
    itemName += "-" + wireRStr + wire.array[wireIndexR].short;
  }
  else if (wireNameL != "") {
    itemDescription += " with " + wireLengthL + "\" " + wireNameL;
    itemName += "-" + wireLStr + wire.array[wireIndexL].short;
    powerPrice += 1 + wireLRound / 2;
  }

  let tapePrice = ((length) * tape.array[tapeIndex].price / 2);
  let profilePrice = 0;
  if (profileName != "") {
    profilePrice = ((length) * profile.array[profileIndex].price / 2);
  }
  let totalPrice = tapePrice + profilePrice + powerPrice;
  // console.log(tapePrice);
  // console.log(profilePrice);
  // console.log(powerPrice);

  tapePrice = (Math.round(tapePrice * 100) / 100).toFixed(2);
  profilePrice = (Math.round(profilePrice * 100) / 100).toFixed(2);
  totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);

  printHelp(itemName, itemDescription, totalPrice, quantity, quantity * totalPrice);
}

function addProduct() {
  let obj = document.getElementById("productInput");
  let productName = obj.value;
  obj = document.getElementById("quantityProduct");
  let quantity = obj.value;

  document.getElementById("errors").innerHTML = "";
  let error = "";
  if (quantity < 1) {
    error += "Product Quantity must be greater than 1 and a whole number <br>";
  }
  let productIndex = testValid(product.array, productName);
  if (productIndex == null && productIndex != "") {
    error += "Invalid Product Name <br>";
  }
  if (error != "") {
    document.getElementById("errors").innerHTML = error;
    return;
  }

  let price = product.array[productIndex].price;
  price = (Math.round(price * 100) / 100).toFixed(2);

  printHelp(productName, product.array[productIndex].description, price, quantity, product.array[productIndex].price * quantity);

}

function addID() {
  let obj = document.getElementById("profileID");
  let name = obj.value;
  obj = document.getElementById("IDQuantity");
  let quantity = obj.value;

  name = name.toUpperCase();

  document.getElementById("errors").innerHTML = "";
  let error = "";
  if (quantity < 1) {
    error += "Product Quantity must be greater than 1 and a whole number <br>";
  }
  const myArray = name.split("-");

  let hasProfile = true;
  let hasLeftWire = true;
  let hasRightWire = true;

  for (let i = 0; i < product.array.length; i++) {
    if (product.array[i].name == name) {
      let price = product.array[i].price;
      price = (Math.round(price * 100) / 100).toFixed(2);
      printHelp(name, product.array[i].description, price, quantity, quantity * price);
      return;
    }
  }

  if (myArray.length < 2) {
    error += "Not enough data for a profile <br>";
    document.getElementById("errors").innerHTML = error;
    return;
  }


  let profileIndex = null;
  let profileLength = 0;

  if (myArray[0].length < 3) {
    error += "Invalid Profile ID <br>";
    hasProfile = false;
  }
  else {
    if (myArray[0].substring(0, 2) == "NA") {
      hasProfile = false;
    }
    let s = "";
    let i = 0;
    while (myArray[0].toUpperCase().charAt(i) >= 'A' && myArray[0].toUpperCase().charAt(i) <= 'Z') {
      s += myArray[0].charAt(i);
      i++;
    }
    let tempLength = "";
    for (let k = i; k < myArray[0].length; k++) {
      if (myArray[0].charAt(k) >= '1' && myArray[0].charAt(k) <= '9') {
        tempLength += myArray[0].charAt(k);
      }
    }
    profileLength = parseInt(tempLength);
    for (let i = 0; i < profile.array.length; i++) {
      if (profile.array[i].short == s) {
        profileIndex = i;
        //console.log(profileIndex);
        break;
      }
    }
  }
  if (profileIndex == null && hasProfile) {
    error += "Invalid Profile ID <br>";
  }

  // console.log(profile.array[profileIndex].description);

  let tapeIndex = null;
  for (let i = 0; i < tape.array.length; i++) {
    if (tape.array[i].short == myArray[1]) {
      tapeIndex = i;
      break;
    }
  }
  if (tapeIndex == null) {
    error += "Invalid Tape ID <br>";
  }



  let firstWireLength = "";
  let firstWireIndex = null;
  let secondWireIndex = null;
  let secondWireLength = "";

  if (myArray.length > 2) {
    let currentIndex = null;
    let firstWireName = "";
    for (let i = 0; i < myArray[2].length; i++) {
      if (myArray[2].charAt(i) < '0' || myArray[2].charAt(i) > '9') {
        currentIndex = i;
        break;
      }
      firstWireLength += myArray[2].charAt(i);
    }
    for (let i = currentIndex; i < myArray[2].length; i++) {
      currentIndex = null;
      if (myArray[2].toUpperCase().charAt(i) < 'A' || myArray[2].toUpperCase().charAt(i) > 'Z') {
        //console.log(myArray[2].charAt(i));
        currentIndex = i;
        break;
      }
      firstWireName += myArray[2].charAt(i);
    }
    for (let i = 0; i < wire.array.length; i++) {
      if (firstWireName == wire.array[i].short) {
        firstWireIndex = i;
      }
    }
    if (firstWireIndex == null) {
      error += "Invalid Wire Name"
    }
    if (parseInt(firstWireLength) < 1) {
      error += "Invalid Wire Size";
    }
    //console.log(wire.array[firstWireIndex].description);
    if (currentIndex != null && firstWireIndex != null) {
      let secondWireName = "";
      for (let i = currentIndex; i < myArray[2].length; i++) {
        currentIndex = null;
        if (myArray[2].charAt(i) < '0' || myArray[2].charAt(i) > '9') {
          currentIndex = i;
          break;
        }
        secondWireLength += myArray[2].charAt(i);
      }
      for (let i = currentIndex; i < myArray[2].length; i++) {
        currentIndex = null;
        if (myArray[2].toUpperCase().charAt(i) < 'A' || myArray[2].toUpperCase().charAt(i) > 'Z') {
          //console.log(myArray[2].charAt(i));
          currentIndex = i;
          break;
        }
        secondWireName += myArray[2].charAt(i);
      }
      for (let i = 0; i < wire.array.length; i++) {
        if (secondWireName == wire.array[i].short) {
          secondWireIndex = i;
        }
      }
      if (secondWireIndex == null) {
        error += "Invalid Wire Name!"
      }
      if (parseInt(firstWireLength) < 1) {
        error += "Invalid Wire Size";
      }
      //console.log(wire.array[secondWireIndex].description);
    }
  }

  let length = parseInt(profileLength / 6) + 1;
  if (profileLength % 6 == 0) {
    length--;
  }

  if (error != "") {
    document.getElementById("errors").innerHTML = error;
    return;
  }

  let description = "";
  let priceP = tape.array[tapeIndex].price / 2 * length;
  //console.log(tape.array[tapeIndex].price * length);
  description += profileLength + "\" of " + tape.array[tapeIndex].name;
  if (profileIndex != null) {
    description += " in " + profile.array[profileIndex].name;
    priceP += length * profile.array[profileIndex].price / 2;
    //console.log(length * profile.array[profileIndex].price);
  }
  if (firstWireIndex != null) {
    description += " with " + firstWireLength + "\" " + wire.array[firstWireIndex].short;
    firstWireLength = parseInt(parseInt(firstWireLength) / 6) + 1;
    if (firstWireLength % 6 == 0) {
      firstWireLength--;
    }
    priceP += 1 + firstWireLength * wire.array[firstWireIndex].price / 2;
    //console.log(firstWireLength * wire.array[firstWireIndex].price);
  }
  if (secondWireIndex != null) {
    description += " / " + secondWireLength + "\" " + wire.array[secondWireIndex].short;
    secondWireLength = parseInt(parseInt(secondWireLength) / 6) + 1;
    if (secondWireLength % 6 == 0) {
      secondWireLength--;
    }
    priceP += 1 + secondWireLength * wire.array[secondWireIndex].price / 2;
    //console.log(secondWireLength * wire.array[secondWireIndex].price);
  }



  //console.log(profileLength);
  // console.log(description);

  priceP = (Math.round(priceP * 100) / 100).toFixed(2);

  printHelp(name, description, priceP, quantity, quantity * priceP);

}
