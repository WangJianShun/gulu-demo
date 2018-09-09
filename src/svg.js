(function (window) {
    var svgSprite = '<svg><symbol id="i-down" viewBox="0 0 1024 1024"><path d="M511.58669087 687.95103347L70.01701173 246.32200719 246.64488366 246.32200719 511.58669087 511.60717978 776.52849807 246.32200719 953.15637002 246.32200719Z"  ></path></symbol><symbol id="i-settings" viewBox="0 0 1024 1024"><path d="M867.12716 413.627529l-66.998927 0c-6.316869-13.610996-15.271822-41.920762-26.731828-62.090127l47.319725-45.986357c14.944364-14.944364 14.96176-38.448684 0.029676-53.367465l-54.019311-53.691853c-14.914688-14.915711-39.10053-14.753005-54.044894 0.179079l-44.683688 47.390333c-20.139689-11.447726-48.449455-20.335141-62.060451-26.64894L605.937462 152.421458c0-21.120017-22.37459-38.21537-43.457768-38.21537l-76.389808 0c-21.094434 0-43.469024 17.095353-43.469024 38.21537l0 67.004043c-13.610996 6.313799-41.908482 15.271822-62.077847 26.714432l-45.99966-47.319725c-14.944364-14.944364-38.465057-14.944364-53.367465-0.028653l-53.691853 54.031591c-14.902408 14.902408-14.765285 39.08825 0.179079 54.04387l47.402613 44.683688c-11.460006 20.169365-20.335141 48.466851-26.64894 62.077847l-66.986647 0c-21.137413 0-38.232766 22.37459-38.232766 43.452651l0 76.393901c0 21.084201 17.095353 43.470047 38.232766 43.470047l66.998927 0c6.316869 13.610996 15.285125 41.903366 26.719548 62.077847l-47.324842 46.01501c-14.944364 14.94027-14.944364 38.432311-0.025583 53.351092l54.015218 53.704133c14.902408 14.902408 39.10053 14.753005 54.04387-0.191358l44.683688-47.402613c20.169365 11.447726 48.466851 20.331048 62.077847 26.64894l0 67.00302c0 21.12104 22.37459 38.216393 43.452651 38.216393l76.393901 0c21.084201 0 43.470047-17.095353 43.470047-38.232766l0-66.998927c13.610996-6.316869 41.903366-15.285125 62.090127-26.731828l46.00273 47.319725c14.94027 14.944364 38.432311 14.944364 53.351092 0.029676l53.704133-54.020334c14.902408-14.914688 14.753005-39.099507-0.191358-54.04387l-47.402613-44.683688c11.447726-20.168342 20.331048-48.449455 26.64894-62.060451l67.00302 0c21.12104 0 38.216393-22.37459 38.216393-43.457768l0-76.389808C905.358903 436.002119 888.263549 413.627529 867.12716 413.627529L867.12716 413.627529zM524.276604 667.140383c-94.925976 0-171.876556-76.95058-171.876556-171.868369 0-94.932116 76.95058-171.881672 171.876556-171.881672 94.943372 0 171.882696 76.95058 171.882696 171.881672C696.1593 590.189803 619.219977 667.140383 524.276604 667.140383L524.276604 667.140383z"  ></path></symbol><symbol id="i-left" viewBox="0 0 1024 1024"><path d="M692 884L320 512 692 140c24-24 24-66 0-90-24-24-66-24-90 0L188 464C170 482 164 494 164 512s6 30 18 48l414 414c24 24 66 24 90 0C716 950 716 908 692 884z"  ></path></symbol><symbol id="i-like" viewBox="0 0 1024 1024"><path d="M890.908 429.534c-20.66-26.05-51.585-40.99-84.84-40.99l-189.34 0c10.34-28.83 17.18-60.165 19.615-90.48 3.785-47.147-3.465-89.02-20.955-121.095-21.53-39.46-58.18-64.072-105.997-71.177-21.662-3.22-40.292 0.945-55.377 12.372-30.495 23.102-36.092 67.065-42.575 117.97-5.182 40.692-11.055 86.817-30.79 119.877-13.172 22.065-38.807 51.397-109.092 51.397l-73.345 0c-48.842 0-88.58 39.722-88.58 88.545l0 334.754c0 48.82 39.737 88.545 88.58 88.545l534.336 0c24.33 0 48.22-8.325 67.275-23.43 19.06-15.11 32.605-36.475 38.145-60.155l73.52-314.264C919.058 489.054 911.553 455.569 890.908 429.534zM168.672 830.708 168.672 495.956c0-16.27 13.252-29.505 29.537-29.505l62.232 0 0 393.762-62.232 0C181.925 860.213 168.672 846.978 168.672 830.708zM853.998 507.956l-73.52 314.272c-5.23 22.36-24.94 37.985-47.93 37.985L319.484 860.213 319.484 462.169c49.877-9.52 87.4-34.92 111.86-75.895 26.05-43.64 32.75-96.257 38.662-142.68 2.67-20.977 5.193-40.79 9.2-55.99 4.297-16.302 8.745-21.08 10.457-22.377 1.96-1.485 5.677-1.835 11.05-1.035 29.615 4.4 50.175 17.83 62.84 41.052 25.99 47.642 14.505 128.052-10.265 182.86-5.93 13.127-4.83 28.167 2.96 40.232 7.78 12.052 21.01 19.247 35.395 19.247l214.424 0c15.125 0 29.185 6.792 38.58 18.637C854.028 478.049 857.438 493.261 853.998 507.956z"  ></path></symbol><symbol id="i-download" viewBox="0 0 1024 1024"><path d="M878.560643 337.248797a57.821717 57.821717 0 0 0-81.743709 0L574.604671 559.46106V172.966627a57.807267 57.807267 0 0 0-115.600085 0v386.494433L236.792323 337.248797a57.821717 57.821717 0 0 0-81.743709 0 57.814492 57.814492 0 0 0 0 81.750935l318.666083 318.666083a57.626642 57.626642 0 0 0 40.871855 16.928188c0.744176 0 1.473901-0.07225 2.218077-0.10115 0.744176 0.0289 1.473901 0.10115 2.218076 0.10115a57.612192 57.612192 0 0 0 40.871855-16.928188L878.560643 418.999732a57.814492 57.814492 0 0 0 0-81.750935zM860.982206 908.37824H165.402046a57.807267 57.807267 0 0 1 0-115.600084h695.572935a57.800042 57.800042 0 0 1 0.007225 115.600084z"  ></path></symbol><symbol id="i-error" viewBox="0 0 1024 1024"><path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m-53.160851 247.611915a48.36766 48.36766 0 0 1 48.149787-48.149787h9.695319a48.36766 48.36766 0 0 1 48.149788 48.149787v318.202553a48.36766 48.36766 0 0 1-48.149788 48.149787h-9.586383a48.36766 48.36766 0 0 1-48.149787-48.149787V247.611915z m53.051915 577.361702a66.124255 66.124255 0 1 1 66.124255-66.124255A66.124255 66.124255 0 0 1 512 824.537872z"  ></path></symbol><symbol id="i-info" viewBox="0 0 1024 1024"><path d="M512 64A448 448 0 1 1 512 960.064 448 448 0 0 1 512 64z m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344z m11.712 360.128c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68 0.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"  ></path></symbol><symbol id="i-loading" viewBox="0 0 1024 1024"><path d="M992 526.08000031s0-2.56000031-0.31999969-7.36000031c0-2.56000031-0.31999969-5.44000031-0.32000062-9.28000031 0-1.92-0.31999969-3.84-0.31999969-6.07999969-0.31999969-2.56000031-0.31999969-5.44000031-0.64000031-8.32000031-0.64000031-5.76-0.96-12.48-1.92-19.2s-1.92-13.75999969-3.19999969-21.75999938c-1.27999969-7.68-3.19999969-16.00000031-4.8-24.96-0.96-4.48000031-2.23999969-8.95999969-3.52000031-13.76000062-1.27999969-4.8-2.23999969-9.6-3.84-14.4-2.88-9.6-6.07999969-20.16-9.91999969-30.72-0.96-2.56000031-1.92-5.44000031-2.88-7.99999969-0.64000031-1.27999969-0.96-2.56000031-1.60000031-4.15999969-0.64000031-1.27999969-0.96-2.56000031-1.59999938-4.16000062-2.23999969-5.44000031-4.48000031-10.87999969-7.04000062-16.63999969-9.91999969-22.39999969-22.39999969-45.76000031-37.75999969-69.43999969-30.72-47.35999969-73.92-95.04-130.56-134.4-28.15999969-19.51999969-59.83999969-37.12000031-94.08-50.88-34.24000031-14.08000031-71.35999969-24-110.08000031-30.08000062l-7.35999938-1.27999969c-2.56000031-0.31999969-4.8-0.64000031-7.36000031-0.96-4.8-0.64000031-9.91999969-0.96-14.71999969-1.60000031-4.8-0.64000031-9.91999969-0.64000031-14.72000062-0.96-5.11999969 0.64000031-9.91999969 0.31999969-15.03999938 0.32000062h-30.40000031c-4.48000031 0.31999969-9.28000031 0.31999969-13.75999969 0.63999938-0.96 0-2.23999969 0-3.84 0.32000062l-3.84 0.31999969-8.00000062 0.64000031c-10.87999969 0.96-20.80000031 2.56000031-31.03999969 4.15999969-5.11999969 0.64000031-10.24000031 1.92-15.36 2.88-5.11999969 0.96-10.24000031 1.92-15.36 3.19999969-9.91999969 2.56000031-20.16 4.8-30.07999969 8.32000031-5.11999969 1.60000031-9.91999969 2.88-15.04000031 4.8-4.8 1.92-9.91999969 3.52000031-14.71999969 5.44000031-19.84000031 7.68-39.04000031 16.32-57.92000062 26.55999938-9.6 4.8-18.55999969 10.56-27.84 16.32-4.48000031 2.88-8.95999969 6.07999969-13.44 8.96000062l-6.72 4.47999938-6.39999938 4.8C189.75999969 164.79999969 158.40000031 195.51999969 131.19999969 229.76c-13.44 17.28-25.60000031 35.52-36.79999969 54.40000031-10.87999969 19.2-20.47999969 39.04000031-28.8 59.19999938-16.32 40.96000031-27.19999969 84.16000031-31.36000031 128.00000062l-0.96 8.31999938-0.31999969 8.32000031-0.96 16.32V529.59999969l0.31999969 7.68 0.32000062 7.68 0.31999969 3.84v1.92l0.31999969 2.24000062 1.60000031 16.95999938c0.31999969 5.76 1.27999969 10.87999969 2.23999969 16.32l1.28000062 8.00000062 0.63999938 4.15999969 0.64000031 4.15999969 3.19999969 16.00000031c0.96 5.44000031 2.56000031 10.56 3.84 15.67999969l1.92 8.00000062c0.64000031 2.56000031 1.60000031 5.11999969 2.24000062 7.68l4.8 15.36c7.03999969 20.47999969 15.04000031 40.32 24.63999938 59.52 19.2 38.08000031 43.51999969 73.27999969 71.68000031 103.99999969l5.11999969 5.76c1.92 1.92 3.52000031 3.84 5.44000031 5.44000031l10.87999969 10.87999969c7.68 7.03999969 15.04000031 14.08000031 23.04 20.47999969 15.67999969 13.12000031 32.32000031 24.96 49.28000062 35.84000062 4.15999969 2.56000031 8.64 5.11999969 12.79999969 7.68 4.15999969 2.56000031 8.64 4.8 13.12000031 7.35999938 8.64 4.8 17.59999969 8.95999969 26.55999938 13.44 17.92000031 7.99999969 36.16000031 15.36 54.72 20.80000031 36.79999969 11.52 74.23999969 17.59999969 110.4 19.51999969 8.95999969 0.64000031 18.24 0.64000031 27.20000062 0.64000031H497.6l6.40000031-0.31999969c4.48000031-0.31999969 8.64-0.31999969 12.79999969-0.64000031 8.95999969-0.96 17.92000031-1.27999969 26.56000031-2.56000031 4.15999969-0.64000031 8.64-0.96 12.79999969-1.92 4.15999969-0.64000031 8.32000031-1.60000031 12.79999969-2.23999969 4.15999969-0.64000031 8.32000031-1.60000031 12.48-2.56000031 4.15999969-0.96 8.32000031-1.60000031 12.16000031-2.88 7.99999969-2.23999969 16.00000031-4.15999969 24-6.72 15.67999969-4.8 30.72-10.56 45.12-16.63999969 28.8-12.48 55.03999969-27.52000031 78.72-43.84000031 23.35999969-16.32 43.84000031-34.24000031 61.75999969-52.15999969 35.52-36.16000031 60.16000031-73.27999969 76.8-105.28000031 16.63999969-31.99999969 25.60000031-59.20000031 31.36000031-77.43999938 1.27999969-4.48000031 2.56000031-8.64 3.52000031-12.16000031 0.96-3.52000031 1.60000031-6.72 2.23999969-8.95999969 1.27999969-4.8 1.92-7.36000031 1.92-7.36000031 0.31999969-0.64000031-0.31999969-1.27999969-0.96-1.60000031-0.64000031-0.31999969-1.27999969 0.31999969-1.60000031 0.96 0 0-0.64000031 2.56000031-2.23999969 7.04000062-0.64000031 2.23999969-1.60000031 5.44000031-2.56000031 8.95999969-0.96 3.52000031-2.56000031 7.36000031-4.15999969 11.83999969-6.40000031 17.92000031-16.63999969 44.16-34.24000031 74.88-17.59999969 30.72-43.51999969 65.92000031-79.35999938 99.20000062-17.92000031 16.63999969-38.71999969 32.95999969-61.76000062 47.67999938-23.35999969 14.71999969-48.96 27.84-76.8 38.4-14.08000031 5.11999969-28.48000031 9.91999969-43.51999969 13.76000062-7.36000031 2.23999969-15.04000031 3.52000031-23.04 5.11999969-3.84 0.96-7.68 1.27999969-11.83999969 2.23999969-3.84 0.64000031-7.99999969 1.27999969-11.84000062 1.92-3.84 0.64000031-7.99999969 0.96-11.83999969 1.60000031-4.15999969 0.64000031-7.99999969 0.64000031-12.16000031 0.96-8.32000031 0.96-16.32 0.96-24.31999969 1.27999969h-25.60000031c-8.32000031-0.31999969-16.96000031-0.64000031-25.27999969-1.59999938-33.91999969-3.19999969-68.16-10.56-101.44000031-22.72000031-16.63999969-5.76-32.95999969-13.44-49.27999969-21.43999969-7.99999969-4.48000031-16.00000031-8.32000031-23.68000031-13.44-3.84-2.23999969-7.68-4.48000031-11.52-7.04000062-3.84-2.56000031-7.68-5.11999969-11.19999938-7.68-15.04000031-10.56-29.44000031-21.76000031-43.2-34.56-7.03999969-6.07999969-13.44-12.79999969-19.84000031-19.51999969-3.19999969-3.52000031-6.40000031-7.03999969-9.28000031-10.24000031-1.60000031-1.60000031-3.19999969-3.52000031-4.8-5.11999969l-4.47999938-5.44000031c-24-28.8-44.16-61.12000031-59.52-95.67999938-7.68-17.28-14.08000031-35.20000031-19.52000062-53.44000031l-3.51999938-13.75999969c-0.64000031-2.23999969-1.27999969-4.48000031-1.60000031-7.04000062l-1.27999969-7.03999969c-0.96-4.8-1.92-9.28000031-2.88-14.08000031l-2.24000062-14.07999938-0.63999938-3.52000031-0.32000062-3.52000031-0.63999938-7.03999969c-0.31999969-4.8-0.96-9.6-1.28000062-14.08000031l-0.63999938-13.75999969v-22.72000031l0.31999969-6.39999938 0.64000031-14.4 1.27999969-14.08000031 0.64000031-7.03999969 0.96-7.04000062c5.44000031-37.75999969 16.32-74.23999969 31.99999969-108.48 7.99999969-16.96000031 16.96000031-33.28000031 26.88-49.27999969 10.24000031-15.67999969 21.12-30.40000031 33.28000031-44.47999969 24-27.84 51.84-52.15999969 81.6-72l5.43999938-3.84 5.76-3.52000031c3.84-2.23999969 7.68-4.8 11.52-7.03999969 7.99999969-4.15999969 15.36-8.64 23.68000031-12.16000031 15.67999969-7.68 31.99999969-14.08000031 48.64000031-19.51999969l12.48-3.84c4.15999969-1.27999969 8.32000031-2.23999969 12.48-3.20000062 8.32000031-2.23999969 16.63999969-3.84 24.96-5.43999938 4.15999969-0.96 8.32000031-1.27999969 12.48-1.92 4.15999969-0.64000031 8.32000031-1.27999969 12.48-1.60000031 8.32000031-0.64000031 16.63999969-1.92 24.31999969-1.92l5.76-0.31999969 2.88-0.32000062h25.60000031l3.19999969 0.32000062c4.15999969 0.31999969 7.99999969 0.31999969 12.16000031 0.63999938 4.15999969 0.31999969 7.99999969 0.64000031 12.15999938 1.28000062 3.84 0.31999969 7.99999969 0.64000031 11.84000062 1.27999969 3.84 0.64000031 7.68 1.27999969 11.83999969 1.92l5.76 0.96 5.76 1.27999969c30.72 6.07999969 59.83999969 15.36 86.4 27.84 26.56000031 12.48 50.56000031 27.19999969 72 43.52000062 42.88000031 32.95999969 74.88 71.68000031 96.64000031 109.11999938 10.87999969 18.88000031 19.51999969 37.12000031 26.55999938 54.40000031 1.60000031 4.48000031 3.19999969 8.64 4.8 12.79999969 0.31999969 0.96 0.64000031 2.23999969 1.28000062 3.20000062 0.31999969 0.96 0.64000031 2.23999969 0.96 3.19999969 0.64000031 2.23999969 1.27999969 4.15999969 1.92 6.07999969 2.88 7.99999969 4.48000031 16.00000031 6.39999938 23.68000031 0.96 3.84 1.60000031 7.36000031 2.24000062 10.87999969 0.64000031 3.52000031 1.60000031 7.03999969 2.23999969 10.56 0.96 6.72 1.92 13.12000031 2.88 19.2 0.64000031 6.07999969 1.27999969 11.52 1.60000031 16.64000062 0.31999969 4.8 0.31999969 8.95999969 0.63999938 12.79999969 0 1.92 0.31999969 3.52000031 0.32000062 5.44000031v22.39999969c0 34.24000031 27.84 62.08000031 62.07999938 61.75999969 34.24000031 0 62.08000031-27.84 61.76000062-62.07999938-0.64000031-1.60000031-0.64000031-2.88-0.64000031-3.84z"  ></path></symbol><symbol id="i-right" viewBox="0 0 1024 1024"><path d="M332.00000001 140L704 512 332.00000001 884c-24 24-24 66-1e-8 90 24 24 66 24 90 0L836 560C854 542 860 530 860 512s-6-30-18-48l-414-414c-24-24-66-24-90 0C308 74 308 116 332.00000001 140z"  ></path></symbol></svg>';
    var script = function () {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1]
    }();
    var shouldInjectCss = script.getAttribute("data-injectcss");
    var ready = function (fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
                setTimeout(fn, 0)
            } else {
                var loadFn = function () {
                    document.removeEventListener("DOMContentLoaded", loadFn, false);
                    fn()
                };
                document.addEventListener("DOMContentLoaded", loadFn, false)
            }
        } else if (document.attachEvent) {
            IEContentLoaded(window, fn)
        }

        function IEContentLoaded(w, fn) {
            var d = w.document, done = false, init = function () {
                if (!done) {
                    done = true;
                    fn()
                }
            };
            var polling = function () {
                try {
                    d.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(polling, 50);
                    return
                }
                init()
            };
            polling();
            d.onreadystatechange = function () {
                if (d.readyState == "complete") {
                    d.onreadystatechange = null;
                    init()
                }
            }
        }
    };
    var before = function (el, target) {
        target.parentNode.insertBefore(el, target)
    };
    var prepend = function (el, target) {
        if (target.firstChild) {
            before(el, target.firstChild)
        } else {
            target.appendChild(el)
        }
    };

    function appendSvg() {
        var div, svg;
        div = document.createElement("div");
        div.innerHTML = svgSprite;
        svgSprite = null;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
            svg.setAttribute("aria-hidden", "true");
            svg.style.position = "absolute";
            svg.style.width = 0;
            svg.style.height = 0;
            svg.style.overflow = "hidden";
            prepend(svg, document.body)
        }
    }

    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
        window.__iconfont__svg__cssinject__ = true;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }
    ready(appendSvg)
})(window)