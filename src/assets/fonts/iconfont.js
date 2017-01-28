;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xuanzhuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M541.09 919.6565c-166.8075 0-309.3525-102.9851-368.1384-248.7484l-68.0856 17.9304c-16.2377 4.2841-27.0211 1.1076-41.4198-7.6696-15.0256-9.1533-19.0589-32.0784-14.754-48.2743l72.0771-213.8488c4.305-16.1541 15.2764-30.302 31.5141-34.5861s32.9352 2.5496 44.8679 14.4405l140.1208 157.9259c11.9327 11.8909 16.2795 27.8361 11.9745 44.0111-4.305 16.1541-15.966 27.7943-32.2038 32.0784l-62.2968 16.4049c48.6504 109.9442 158.3856 186.7442 286.3438 186.7442 173.1187 0 313.4694-140.3507 313.4694-313.4694s-140.3507-313.4694-313.4694-313.4694c-41.3571 0-80.7079 8.2129-116.8614 22.737 0 0-15.4018 19.0589-50.3223 19.0589-23.0713 0-41.7959-18.7246-41.7959-41.7959 0-39.3927 37.4073-44.1783 37.4073-44.1783 51.9941-24.994 110.0278-39.4136 171.5722-39.4136 219.2823 0 397.0612 177.7789 397.0612 397.0612S760.3722 919.6565 541.09 919.6565z"  ></path>' +
    '' +
    '<path d="M541.09 418.1055c57.6993 0 104.4898 46.7696 104.4898 104.4898s-46.7905 104.4898-104.4898 104.4898-104.4898-46.7696-104.4898-104.4898S483.3907 418.1055 541.09 418.1055z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zoomout" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.563602 739.900523 730.077751 607.420233c33.485008-50.556443 53.002323-111.168915 53.002323-176.348404 0-176.62265-143.187013-319.803653-319.817076-319.803653s-319.817076 143.181003-319.817076 319.803653 143.187013 319.803653 319.817076 319.803653c65.182224 0 125.798264-19.517519 176.355806-53.000098L772.1067 830.354652c24.978929 24.977881 65.478995 24.977881 90.457925 0C887.543554 805.376771 887.543554 764.878404 862.563602 739.900523zM701.397367 531.635199c-13.011884 30.763654-31.653213 58.404178-55.40617 82.156138-23.751934 23.750937-51.394641 42.391483-82.159587 55.403844-31.818995 13.4575-65.655011 20.281929-100.568614 20.281929s-68.748596-6.823406-100.568614-20.281929c-30.764945-13.011338-58.406629-31.651884-82.159587-55.403844-23.751934-23.750937-42.393262-51.392484-55.40617-82.156138-13.458065-31.81766-20.28278-65.652256-20.28278-100.564393s6.823692-68.74571 20.28278-100.564393c13.011884-30.763654 31.653213-58.404178 55.40617-82.156138 23.751934-23.750937 51.394641-42.391483 82.159587-55.403844 31.820018-13.4575 65.655011-20.281929 100.568614-20.281929s68.748596 6.823406 100.568614 20.281929c30.764945 13.011338 58.406629 31.651884 82.159587 55.403844 23.751934 23.750937 42.393262 51.392484 55.40617 82.156138 13.458065 31.81766 20.28278 65.652256 20.28278 100.564393S714.855432 499.81754 701.397367 531.635199zM599.123853 399.090441l-271.719666 0c-16.955872 0-30.700474 13.744026-30.700474 30.699186l0 2.562359c0 16.95516 13.744602 30.699186 30.700474 30.699186l271.719666 0c16.955872 0 30.700474-13.744026 30.700474-30.699186l0-2.562359C629.824328 412.83549 616.078702 399.090441 599.123853 399.090441z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xuanzhuan1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M835.137073 645.906779l118.317733-192.384635L870.919021 453.522144C842.459852 260.303514 675.091984 111.958908 472.868259 111.958908c-222.196615 0-402.325112 179.102121-402.325112 400.039046 0 220.933855 180.127474 400.042115 402.325112 400.042115 138.6365 0 260.887822-69.725014 333.236594-175.823448l-62.931285-33.713846c-60.033281 84.055394-158.727071 138.903583-270.300192 138.903583-182.969195 0-331.294358-147.481959-331.294358-329.407382 0-181.927469 148.325164-329.405335 331.294358-329.405335 162.892951 0 298.328549 116.89943 326.081637 270.934642l-82.132602 0L835.137073 645.906779 835.137073 645.906779zM835.137073 645.906779"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-plus1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M31.030303 31.030303 31.030303 31.030303 31.030303 31.030303Z"  ></path>' +
    '' +
    '<path d="M785.625212 477.866667l-208.523636 0 0-208.523636c0-27.430788-22.217697-29.789091-49.648485-29.789091s-49.648485 2.358303-49.648485 29.789091l0 208.523636-208.461576 0c-27.430788 0-29.789091 22.217697-29.789091 49.648485s2.358303 49.648485 29.789091 49.648485l208.461576 0 0 208.523636c0 27.430788 22.217697 29.789091 49.648485 29.789091s49.648485-2.358303 49.648485-29.789091l0-208.523636 208.523636 0c27.430788 0 29.851152-22.217697 29.851152-49.648485s-2.358303-49.648485-29.851152-49.648485z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-layout" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M858.496084 107.754143 165.50187 107.754143c-42.482557 0-76.998675 34.57547-76.998675 76.999698l0 654.494365c0 42.481534 34.516118 76.997652 76.998675 76.997652L858.496084 916.245857c42.481534 0 76.998675-34.516118 76.998675-76.997652L935.494759 184.753841C935.494759 142.329613 900.977617 107.754143 858.496084 107.754143zM165.50187 399.820058l224.418212 0 0 439.428148L165.50187 839.248206 165.50187 399.820058zM466.918757 839.248206l0-439.428148L858.496084 399.820058l0-76.997652L165.50187 322.822406 165.50187 184.753841 858.496084 184.753841l0.056282 654.494365L466.918757 839.248206z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zoomout1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M442.206923 837.86981c-218.52664 0-395.610177-177.174608-395.610177-395.618364 0-218.52664 177.084561-395.698178 395.610177-395.698178s395.619387 177.171538 395.619387 395.698178C837.82631 660.694179 660.732539 837.86981 442.206923 837.86981L442.206923 837.86981zM1017.154883 984.246302 770.481397 737.647514c70.541581-78.385901 113.898182-181.73119 113.898182-295.397091 0-244.201287-198.05016-442.250423-442.172655-442.250423-244.280078 0-442.163446 198.049137-442.163446 442.250423 0 244.20538 197.884391 442.089771 442.163446 442.089771 113.740599 0 217.084865-43.272693 295.398115-113.82246l246.598788 246.681672c4.241418 4.241418 10.081169 6.800594 16.476552 6.800594 12.880812 0 23.276123-10.320613 23.276123-23.276123C1023.955477 994.328495 1021.3963 988.562418 1017.154883 984.246302L1017.154883 984.246302zM651.613236 418.895509 232.643028 418.895509c-12.797928 0-23.194262 10.478195-23.194262 23.354914 0 12.880812 10.396334 23.194262 23.194262 23.194262l418.970208 0c12.797928 0 23.276123-10.31345 23.276123-23.194262C674.889358 429.373704 664.411164 418.895509 651.613236 418.895509L651.613236 418.895509z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zoomin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M472.746667 472.746667l-85.333333 0c-10.24 0-17.066667 6.826667-17.066667 17.066667s6.826667 17.066667 17.066667 17.066667l85.333333 0 34.133333 0 85.333333 0c10.24 0 17.066667-6.826667 17.066667-17.066667s-6.826667-17.066667-17.066667-17.066667l-85.333333 0L472.746667 472.746667z"  ></path>' +
    '' +
    '<path d="M732.16 708.266667l-88.746667-88.746667c68.266667-80.213333 66.56-199.68-8.533333-273.066667C597.333333 307.2 547.84 286.72 494.933333 286.72c-54.613333 0-107.52 22.186667-146.773333 61.44-80.213333 80.213333-81.92 208.213333-3.413333 286.72 37.546667 37.546667 87.04 58.026667 139.946667 58.026667 49.493333 0 95.573333-17.066667 133.12-49.493333l88.746667 88.746667c3.413333 3.413333 8.533333 5.12 11.946667 5.12s8.533333-1.706667 11.946667-5.12C738.986667 725.333333 738.986667 713.386667 732.16 708.266667zM368.64 610.986667c-64.853333-64.853333-63.146667-172.373333 3.413333-238.933333 32.426667-32.426667 76.8-51.2 121.173333-51.2 44.373333 0 85.333333 17.066667 116.053333 47.786667 64.853333 64.853333 63.146667 172.373333-3.413333 238.933333-32.426667 32.426667-76.8 51.2-122.88 51.2C442.026667 658.773333 399.36 641.706667 368.64 610.986667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-twzoomin01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M414.016 990.016 692.992 990.016 414.016 990.016Z"  ></path>' +
    '' +
    '<path d="M960 914.752l-164.288-164.288C858.112 677.696 896 583.36 896 480 896 250.24 709.76 64 480 64S64 250.24 64 480 250.24 896 480 896c103.36 0 197.696-37.888 270.464-100.288L914.752 960 960 914.752zM128 480C128 285.568 285.568 128 480 128S832 285.568 832 480c0 194.432-157.568 352-352 352S128 674.432 128 480z"  ></path>' +
    '' +
    '<path d="M320 448l320 0 0 64-320 0 0-64Z"  ></path>' +
    '' +
    '<path d="M448 320l64 0 0 320-64 0 0-320Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-modify" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M845.496002 122.460076 176.030667 122.460076c-59.250452 0-107.455337 48.204885-107.455337 107.455337l0 560.865941c0 59.251475 48.204885 107.456361 107.455337 107.456361l669.465335 0c59.250452 0 107.456361-48.203862 107.456361-107.456361L952.952362 229.915413C952.952362 170.664961 904.747477 122.460076 845.496002 122.460076M176.030667 192.349843l669.465335 0c20.712741 0 37.565571 16.851806 37.565571 37.565571l0 425.88469c-17.175171 8.1711-51.516304 20.218484-117.837802 31.423687-118.876458 20.077268-170.696684-26.886347-242.419192-91.89699-28.614711-25.937742-58.20361-52.757574-95.086635-77.723176-98.350982-66.574255-221.75557-24.429389-289.252847 8.398274L138.465097 229.915413C138.465097 209.202673 155.317926 192.349843 176.030667 192.349843M845.496002 828.348971 176.030667 828.348971c-20.713764 0-37.565571-16.851806-37.565571-37.566594L138.465097 585.17765c48.189535-26.727735 171.754782-83.806731 259.868609-24.164353 33.81106 22.886243 62.004169 48.441269 89.268116 73.15309 62.202691 56.380078 121.452119 110.10263 226.122017 110.095467 18.553565-0.001023 38.553061-1.690502 60.231803-5.353938 34.830273-5.882987 75.759451-14.559601 109.104907-26.618241l0 78.492702C883.061572 811.497165 866.208742 828.348971 845.496002 828.348971"  ></path>' +
    '' +
    '<path d="M686.311513 486.193241c55.689347 0 100.996229-45.308929 100.996229-100.999298 0-55.688323-45.306882-100.995205-100.996229-100.995205s-100.996229 45.306882-100.996229 100.995205C585.314261 440.884312 630.622166 486.193241 686.311513 486.193241M686.311513 319.143621c36.420491 0 66.052368 29.629831 66.052368 66.050322 0 36.422538-29.631878 66.054415-66.052368 66.054415-36.421514 0-66.051345-29.631878-66.051345-66.054415C620.260168 348.773452 649.889999 319.143621 686.311513 319.143621"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-modify1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M708.79744 696.321024c12.736512 0 23.04-10.299392 23.04-23.038976 0-12.735488-10.30656-23.037952-23.04-23.037952L500.897792 650.244096 292.908032 650.244096c-12.689408 0-23.038976 10.304512-23.038976 23.037952 0 12.741632 10.348544 23.038976 23.038976 23.038976L708.79744 696.321024zM507.287552 465.92512c12.686336 0 23.041024-10.299392 23.041024-23.04 0-12.734464-10.354688-23.04-23.041024-23.04L292.908032 419.84512c-12.689408 0-23.038976 10.30656-23.038976 23.04 0 12.741632 10.348544 23.04 23.038976 23.04L507.287552 465.92512zM1003.766784 97.471488c10.037248-10.573824 10.037248-27.718656 0-38.341632-10.036224-10.573824-26.326016-10.573824-36.314112 0L650.159104 373.59104c-10.031104 10.573824-10.031104 27.716608 0 38.334464 10.038272 10.580992 26.329088 10.580992 36.31616 0L1003.766784 97.471488zM873.672704 857.423872c0 37.57056-35.369984 69.25312-80.146432 69.25312L216.546304 926.676992c-44.862464 0-80.145408-31.500288-80.145408-68.937728l-0.718848-691.103744c0-37.526528 35.457024-68.980736 80.864256-68.980736l494.140416-0.31232c12.68736 0 22.948864-10.30656 22.948864-23.089152 0-12.734464-10.26048-23.041024-22.948864-23.041024l-494.140416 0.319488c-69.612544 0-126.851072 50.755584-126.851072 115.103744l0.763904 691.103744C90.458112 921.956352 147.47136 972.8 216.546304 972.8l576.984064 0c69.02784 0 126.087168-51.069952 126.087168-115.37408 0 0 0-144.856064 0-227.923968 0-83.11296 0-234.21952 0-234.21952 0-12.734464-10.304512-23.038976-22.992896-23.038976-12.691456 0-22.950912 10.304512-22.950912 23.038976L873.673728 857.423872z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-layout1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M945.230769 984.615385l-866.461538 0c-21.661538 0-39.384615-17.723077-39.384615-39.384615l0-866.461538c0-21.661538 17.723077-39.384615 39.384615-39.384615l866.461538 0c21.661538 0 39.384615 17.723077 39.384615 39.384615l0 866.461538c0 21.661538-17.723077 39.384615-39.384615 39.384615zm-827.076923-78.769231l787.692308 0 0-787.692308-787.692308 0 0 787.692308zm649.846154-512l-512 0c-11.815385 0-19.692308-7.876923-19.692308-19.692308l0-118.153846c0-11.815385 7.876923-19.692308 19.692308-19.692308l512 0c11.815385 0 19.692308 7.876923 19.692308 19.692308l0 118.153846c0 11.815385-7.876923 19.692308-19.692308 19.692308zm-393.846154 393.846154l-118.153846 0c-11.815385 0-19.692308-7.876923-19.692308-19.692308l0-236.307692c0-11.815385 7.876923-19.692308 19.692308-19.692308l118.153846 0c11.815385 0 19.692308 7.876923 19.692308 19.692308l0 236.307692c0 11.815385-7.876923 19.692308-19.692308 19.692308zm393.846154 0l-236.307692 0c-11.815385 0-19.692308-7.876923-19.692308-19.692308l0-236.307692c0-11.815385 7.876923-19.692308 19.692308-19.692308l236.307692 0c11.815385 0 19.692308 7.876923 19.692308 19.692308l0 236.307692c0 11.815385-7.876923 19.692308-19.692308 19.692308z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-suoxiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M996.431 949.169l-149.662-149.662 15.754-15.754c161.477-204.8 122.092-500.185-82.708-661.662s-500.185-126.031-657.723 78.769c-157.538 204.8-126.031 504.123 78.769 661.662 169.354 133.908 409.6 133.908 578.954 0l15.754-15.754 149.662 149.662c11.815 11.815 35.446 11.815 47.262 0s15.754-35.446 3.938-47.262zM492.308 901.908c-224.492 0-405.662-181.169-405.662-405.662s181.169-405.662 405.662-405.662c224.492 0 405.662 181.169 405.662 405.662s-181.169 405.662-405.662 405.662z"  ></path>' +
    '' +
    '<path d="M303.262 472.615l374.154 0 0 66.954-374.154 0 0-66.954z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-modify2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M735.799624 852.208379h-456.212416c-41.924855 0-76.036767-34.116005-76.036767-76.036767v-506.881423c0-41.914622 34.111912-76.030627 76.036767-76.030627h354.829378c14.016225 0 25.348318 11.353582 25.348317 25.344225 0 13.989619-11.332093 25.343201-25.348317 25.343201h-354.829378c-13.96506 0-25.348318 11.378142-25.348318 25.344225v506.881422c0 13.993712 11.382235 25.348318 25.348318 25.348318h456.212416c13.985526 0 25.345248-11.354606 25.345248-25.348318V370.670158c0-13.992689 11.329023-25.347295 25.348318-25.347295 14.011108 0 25.343201 11.354606 25.343201 25.347295v405.501454c-0.001023 41.924855-34.121122 76.036767-76.036767 76.036767z m-148.905378-405.505548a25.269523 25.269523 0 0 1-17.917069-7.431249c-9.91379-9.902534-9.91379-25.923416 0-35.83516l251.879658-251.866355c9.910721-9.911744 25.931602-9.911744 35.834137 0 9.91379 9.905604 9.91379 25.921369 0 35.837207l-251.875565 251.863285c-4.943592 4.975315-11.429307 7.432273-17.921161 7.432272z m-104.546078 0h-152.069441c-13.992689 0-25.348318-11.355629-25.348318-25.348317 0-13.988596 11.356652-25.343201 25.348318-25.343202h152.069441c13.989619 0 25.345248 11.354606 25.345248 25.343202 0 13.992689-11.355629 25.348318-25.345248 25.348317z m152.068418 152.062278h-304.137859c-13.992689 0-25.348318-11.326976-25.348318-25.340131 0-14.021342 11.356652-25.347295 25.348318-25.347295h304.137859c14.016225 0 25.348318 11.32493 25.348317 25.347295 0 14.013155-11.332093 25.340131-25.348317 25.340131z" fill="#272536" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xuanzhuan2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M888.61696 642.6112c1.13664 5.01248 0.0512 11.16672-1.60256 16.19456-33.37216 152.50432-160.06656 275.29216-324.608 295.552-207.49312 26.58816-398.45888-121.56928-424.50432-330.74176s121.0112-399.56992 331.2896-426.17344c5.0176-1.14176 11.71456-1.72544 17.29024-1.75104-2.32448-21.1968-5.20704-40.71936-6.95296-58.0096-2.88768-22.30784-5.75488-39.04-5.78048-44.6208-1.69984-6.12864-1.1776-13.3888 3.27168-18.432 6.65088-8.96 18.37056-10.68544 27.32544-4.02944l0.5632 1.11616 15.68768 14.4384 110.88384 86.56896 15.68256 11.65312 13.44 9.984c4.47488 3.328 6.72256 7.78752 7.86432 12.80512 1.13664 5.01248-0.51712 10.04544-3.84 14.52544l-9.98912 13.44-11.648 15.67744-86.56384 110.88384-12.76416 16.24064-1.11616 0.5632c-7.2192 7.84896-18.92864 9.56928-27.88352 2.91328-5.04832-4.44416-8.42752-11.12576-7.34208-17.26976-1.13664-5.0176-2.88256-22.30784-5.77536-44.6208-2.304-15.616-4.61312-34.02752-6.93248-52.4288-5.58592 0.0256-11.71456 1.72544-17.29024 1.75104-169.55904 21.4016-291.09248 176.53248-269.696 346.10176 21.4016 169.56416 176.53248 291.09248 346.09664 269.696 135.53664-16.78336 240.55808-118.82496 265.66656-246.17984 3.84512-14.53056 15.51872-24.6272 30.01856-26.36288 19.52768-2.88256 38.00576 11.5456 39.20896 30.5152z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-modify3" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M927.873174 823.650973H96.026542c-19.195178 0-32.034601 12.492522-32.034601 31.250748s12.8384 31.252795 32.034601 31.252794h831.846632c19.161409 0 31.979342-12.494569 31.979342-31.252794s-12.817933-31.250748-31.979342-31.250748z m-147.182131-475.021808c25.593911-25.02393 25.593911-68.726268 0-93.752244l-102.359272-99.997481c-25.616424-24.985044-70.416769-24.985044-95.992261 0L140.817678 586.16514l-44.791136 237.485833 243.140623-43.784203 441.523878-431.237605zM595.116511 223.626173c19.227923-18.739806 51.210335-18.739806 76.80527 0l38.392402 37.495986c25.574469 18.780739 25.574469 56.235792 6.388501 75.016531L659.103848 386.127198 543.947108 273.65766l51.169403-50.031487zM172.811346 742.401484l38.382169-143.763265 294.330492-287.506063 115.208928 112.492051-294.373471 287.506063-153.548118 31.271214z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xuanzhuan3" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1008 418.1c-13.5-11.4-33.7-9.6-45.1 3.9l-24.1 28.7c-5.4-36-15.3-71.1-29.6-104.9-22.2-52.3-53.8-99.3-94.2-139.6-40.3-40.3-87.3-72-139.7-94.2-54.2-22.9-111.7-34.5-171-34.5S387.5 89.1 333.3 112C281 134.2 234 165.8 193.6 206.2c-40.3 40.3-72 87.3-94.2 139.7-22.9 54.2-34.5 111.7-34.5 171s11.6 116.8 34.5 171c22.1 52.3 53.8 99.3 94.2 139.7 40.3 40.3 87.3 72 139.7 94.2 54.2 22.9 111.7 34.5 171 34.5 127.8 0 249-55.5 332.6-152.2 11.6-13.4 10.1-33.6-3.3-45.1s-33.6-10.1-45.1 3.3c-71.4 82.7-175 130.1-284.2 130.1-207 0-375.4-168.4-375.4-375.4S297.3 141.5 504.3 141.5c188.8 0 345.5 140.1 371.6 321.9L832.6 429c-13.8-11-34-8.7-45 5.2-11 13.8-8.7 34 5.2 45l99 78.6c5.9 4.7 12.9 6.9 19.9 6.9 9.1 0 18.2-3.9 24.5-11.4l75.7-90c11.4-13.6 9.6-33.8-3.9-45.2z"  ></path>' +
    '' +
    '<path d="M349 291.9c-29.8 0-54 24.2-54 54v338.7c0 29.8 24.2 54 54 54h304.6c29.8 0 54-24.2 54-54V345.9c0-29.8-24.2-54-54-54H349z m294.6 64v67.2c-4.7 1.2-9.1 3.5-13 6.9l-123 107.6-64.4-33.4c-12.6-6.5-28-4-37.8 6.2L359 558.8V355.9h284.6zM359 674.6v-29c4.9-1.6 9.5-4.3 13.3-8.3L435 572l62.5 32.4c11.7 6.1 25.9 4.3 35.8-4.3l110.3-96.5v171H359z"  ></path>' +
    '' +
    '<path d="M430.1 477.1c24.2 0 43.9-19.7 43.9-43.9s-19.7-43.9-43.9-43.9-43.9 19.7-43.9 43.9 19.6 43.9 43.9 43.9z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-i-zoomin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1012.427 1012.47a39.309 39.309 0 0 1-55.578 0L708.083 763.704c-75.033 62.462-170.205 101.543-275.445 101.543A432.623 432.623 0 1 1 865.26 432.623c0 105.24-39.081 200.412-101.6 275.446l248.766 248.765c15.36 15.36 15.36 40.276 0 55.636z m-225.84-579.847a353.95 353.95 0 1 0-353.95 353.95c215.317 0 353.95-182.493 353.95-353.95z m-196.658 39.31H471.946v117.982a39.309 39.309 0 0 1-78.617 0V471.932H275.346a39.309 39.309 0 1 1 0-78.617h117.983V275.332a39.309 39.309 0 0 1 78.617 0v117.983H589.93a39.309 39.309 0 1 1 0 78.617z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zoomin1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M888.36096 853.15072l-250.27072-252.76416c93.75744-112.79872 88.15104-281.78432-16.84992-387.84C567.47008 158.24896 495.9744 128.34304 419.9424 128.34304c-76.0576 0-147.5328 29.90592-201.29792 84.20864-110.94016 112.05632-110.94016 294.37952 0 406.43584 53.76512 54.2976 125.24544 84.20864 201.29792 84.20864 68.48 0 133.2736-24.2688 184.7552-68.7616l250.01984 252.50816a23.60832 23.60832 0 0 0 16.82432 7.03488 23.6032 23.6032 0 0 0 16.77824-6.98368 24.064 24.064 0 0 0 0.04096-33.8432z m-300.76928-267.95008c-44.76928 45.2352-104.33024 70.144-167.64928 70.144-63.34464 0-122.88512-24.9088-167.67488-70.144-92.50816-93.44-92.50816-245.4272 0-338.8672 44.79488-45.2352 104.33024-70.144 167.67488-70.144 63.32416 0 122.88512 24.9088 167.64928 70.144 92.50816 93.44 92.50816 245.43232 0 338.8672z m-47.29344-192.9472H308.13184c-13.1328 0-23.76192 10.7008-23.76192 23.92576s10.62912 23.92576 23.76192 23.92576h232.1664c13.1072 0 23.74144-10.7008 23.74144-23.92576-0.00512-13.22496-10.63424-23.92576-23.74144-23.92576zM400.27648 300.0832v232.1664c0 13.1328 10.7008 23.76192 23.92576 23.76192s23.92576-10.62912 23.92576-23.76192V300.0832c0-13.1072-10.7008-23.74144-23.92576-23.74144s-23.92576 10.63424-23.92576 23.74144z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)