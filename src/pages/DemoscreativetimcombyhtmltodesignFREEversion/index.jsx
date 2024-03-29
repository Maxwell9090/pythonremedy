import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function DemoscreativetimcombyhtmltodesignFREEversionPage() {
  return (
    <>
      <Helmet>
        <title>N3twork</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-200">
        <div className="flex flex-col self-end items-end gap-[619px] md:gap-[464px] sm:gap-[309px]">
          <div className="flex md:flex-col self-stretch justify-end items-start">
            <div className="h-[1080px] w-[14%] md:w-full md:h-auto md:p-5 bg-white-A700 shadow-xs relative">
              <Img src="images/img_div_jss23.png" alt="divjsstwentythr" className="h-[1080px] w-full object-cover" />
              <Sidebar
                width="262px !important"
                className="flex-col h-screen top-0 left-0 bottom-0 right-0 p-[15px] m-auto bg-black-900 !sticky overflow-auto md:hidden"
              >
                <div className="flex flex-col self-stretch items-start mt-[75px] mb-[379px]">
                  <div className="flex self-stretch justify-between items-center ml-2 gap-5 md:ml-0">
                    <div className="flex justify-center items-center w-[63%] gap-[11px]">
                      <Img
                        src="images/img_avatar_6ea8c10a_jpg.png"
                        alt="avatar6ea8c10a"
                        className="h-[34px] w-[34px] rounded-[50%]"
                      />
                      <Text as="p" className="!text-white-A700">
                        Tania Andrew
                      </Text>
                    </div>
                    <div className="self-end w-[4%] mb-3.5" />
                  </div>
                  <div className="self-stretch h-px w-full mt-[19px] bg-white-A700_4c" />
                  <div className="flex items-center mt-[25px] gap-[15px] p-2.5 bg-cyan-600 shadow-sm rounded-[3px]">
                    <Img src="images/img_svg.svg" alt="svg_one" className="h-[24px] my-[3px]" />
                    <Text as="p" className="!text-white-A700">
                      Dashboard
                    </Text>
                  </div>
                  <div className="flex justify-between items-center w-[87%] md:w-full mt-[23px] ml-2.5 gap-5 md:ml-0">
                    <div className="flex items-center gap-[15px]">
                      <Img src="images/img_list_item_link.svg" alt="listitemlink" className="h-[24px]" />
                      <Text as="p" className="self-end !text-white-A700">
                        Pages
                      </Text>
                    </div>
                    <div className="h-[4px] w-[8px] border-white-A700 border-t-4 border-l-4 border-r-4 border-solid" />
                  </div>
                  <div className="flex justify-between items-center w-[87%] md:w-full mt-9 ml-2.5 gap-5 md:ml-0">
                    <div className="flex items-center gap-[15px]">
                      <Img src="images/img_list_item_link_white_a700.svg" alt="listitemlink" className="h-[24px]" />
                      <Text as="p" className="self-end mb-0.5 !text-white-A700">
                        Components
                      </Text>
                    </div>
                    <div className="h-[4px] w-[8px] border-white-A700 border-t-4 border-l-4 border-r-4 border-solid" />
                  </div>
                  <div className="flex items-center w-[87%] md:w-full mt-9 ml-2.5 gap-[15px] md:ml-0">
                    <Img src="images/img_list_item_link_white_a700_24x30.svg" alt="listitemlink" className="h-[24px]" />
                    <Menu
                      menuItemStyles={{
                        button: {
                          padding: " ",
                          color: "#ffffff",
                          fontWeight: 300,
                          fontSize: "14px",
                          margin: " ",
                        },
                      }}
                      className="w-full flex-1"
                    >
                      <MenuItem
                        suffix={
                          <div className="self-end w-[5%] border-white-A700 border-t-4 border-l-4 border-r-4 border-solid" />
                        }
                      >
                        Forms
                      </MenuItem>
                    </Menu>
                  </div>
                  <div className="flex justify-between items-center w-[87%] md:w-full mt-9 ml-2.5 gap-5 md:ml-0">
                    <div className="flex items-center gap-[15px]">
                      <Img src="images/img_list_item_link_24x30.svg" alt="listitemlink" className="h-[24px]" />
                      <Text as="p" className="!text-white-A700">
                        Tables
                      </Text>
                    </div>
                    <div className="w-[4%]" />
                  </div>
                  <div className="flex justify-between items-center w-[87%] md:w-full mt-9 ml-2.5 gap-5 md:ml-0">
                    <div className="flex items-center gap-[15px]">
                      <Img src="images/img_list_item_link_1.svg" alt="listitemlink" className="h-[24px]" />
                      <Text as="p" className="self-end mb-0.5 !text-white-A700">
                        Maps
                      </Text>
                    </div>
                    <div className="h-[4px] w-[8px] border-white-A700 border-t-4 border-l-4 border-r-4 border-solid" />
                  </div>
                  <div className="flex items-center mt-9 ml-2.5 gap-[15px] md:ml-0">
                    <Img src="images/img_svg.svg" alt="listitemlink" className="h-[24px]" />
                    <Text as="p" className="self-end mb-0.5 !text-white-A700">
                      Widgets
                    </Text>
                  </div>
                  <div className="flex items-center mt-9 ml-2.5 gap-[15px] md:ml-0">
                    <Img src="images/img_list_item_link_2.svg" alt="listitemlink" className="h-[24px]" />
                    <Text as="p" className="!text-white-A700">
                      Charts
                    </Text>
                  </div>
                  <div className="flex items-center mt-9 ml-2.5 gap-[15px] md:ml-0">
                    <Img src="images/img_list_item_link_3.svg" alt="listitemlink" className="h-[24px]" />
                    <Text as="p" className="!text-white-A700">
                      Calendar
                    </Text>
                  </div>
                </div>
              </Sidebar>
            </div>
            <div className="md:self-stretch mt-2.5 md:p-5 flex-1">
              <div className="flex flex-col gap-[49px]">
                <header className="flex sm:flex-col justify-between items-center gap-5 px-[15px]">
                  <div className="flex justify-center items-center w-[11%] sm:w-full gap-[30px]">
                    <Img src="images/img_div_jss88.svg" alt="divjsseightyeig" className="h-[51px]" />
                    <a href="Dashboard" target="_blank" rel="noreferrer">
                      <Text size="xl" as="p" className="!text-gray-700_01 text-center">
                        Dashboard
                      </Text>
                    </a>
                  </div>
                  <div className="flex w-[21%] sm:w-full py-[5px]">
                    <div className="flex items-center w-full">
                      <div className="self-end mb-[3px] flex-1">
                        <div className="flex flex-col items-start">
                          <div className="flex">
                            <Text as="p" className="!text-gray-500 !font-normal">
                              Search
                            </Text>
                          </div>
                          <div className="self-stretch h-[20px] mt-[-10px] relative border-blue_gray-100 border-b border-solid" />
                        </div>
                      </div>
                      <Button className="flex items-center justify-center h-[41px] w-[41px] bg-white-A700 shadow-md rounded-[20px]">
                        <Img src="images/img_search.svg" />
                      </Button>
                      <Img src="images/img_button_dashboard.svg" alt="button_one" className="h-[20px] w-[20px] ml-3" />
                      <div className="h-[41px] w-[41px] ml-3 p-[5px] relative">
                        <Img
                          src="images/img_svg_gray_700_01.svg"
                          alt="svg_three"
                          className="h-[20px] w-[20px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <Text
                          size="xs"
                          as="p"
                          className="flex justify-center items-center h-[16px] w-[16px] right-[5.00px] top-[5.00px] m-auto !text-white-A700 uppercase text-center border-white-A700 border border-solid bg-red-500 absolute rounded-lg"
                        >
                          5
                        </Text>
                      </div>
                      <Img
                        src="images/img_button_menu_person.svg"
                        alt="buttonmenu_one"
                        className="h-[20px] w-[20px] ml-3"
                      />
                    </div>
                  </div>
                </header>
                <div className="flex flex-col gap-10">
                  <div>
                    <div className="flex md:flex-col gap-[30px]">
                      <div className="flex">
                        <div className="flex flex-col items-start">
                          <div className="flex flex-col self-center items-center justify-center p-6 sm:p-5 z-[1] bg-gradient4 shadow-3xl rounded-[3px]">
                            <Img src="images/img_computer.svg" alt="used_space_one" className="h-[36px] w-[36px]" />
                          </div>
                          <div className="flex self-center mt-[-67px] p-2.5 relative bg-white-A700 shadow-xl rounded-md">
                            <div className="flex flex-col items-end mt-0.5">
                              <Text as="p" className="!text-gray-500_03 text-right">
                                Used Space
                              </Text>
                              <div className="flex items-center mt-[5px] flex-wrap">
                                <Text size="2xl" as="p" className="!text-blue_gray-800 text-right !text-[25.6px]">
                                  49/50{" "}
                                </Text>
                                <Text
                                  size="lg"
                                  as="p"
                                  className="self-end h-[20px] mb-[3px] !text-gray-600_04 text-right !text-[16.6px]"
                                >
                                  GB
                                </Text>
                              </div>
                              <div className="flex self-start items-center mt-[22px] pt-[11px] border-gray-200 border-t border-solid">
                                <Img
                                  src="images/img_div_jss235.svg"
                                  alt="get_more_space"
                                  className="h-[22px] w-[22px]"
                                />
                                <Text size="s" as="p" className="self-end mb-0.5 !text-purple-500">
                                  Get more space
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex flex-col items-start">
                          <div className="flex flex-col self-center items-center p-[25px] sm:p-5 z-[1] bg-gradient5 shadow-lg rounded-[3px]">
                            <Img src="images/img_svg_white_a700.svg" alt="svg_one" className="h-[36px] w-[36px]" />
                          </div>
                          <div className="flex flex-col self-end items-end justify-center mt-[-66px] p-2.5 relative bg-white-A700 shadow-xl rounded-md">
                            <Text as="p" className="mr-1 md:mr-0 !text-gray-500_03 text-right">
                              Revenue
                            </Text>
                            <Text
                              size="2xl"
                              as="p"
                              className="mt-1.5 mr-1 md:mr-0 !text-blue_gray-800 text-right !text-[25.6px]"
                            >
                              $34,245
                            </Text>
                            <div className="flex self-start items-end mt-[22px] gap-[3px] border-gray-200 border-t border-solid">
                              <Img
                                src="images/img_svg_gray_500_03.svg"
                                alt="svg_three"
                                className="h-[16px] w-[16px] mt-[13px]"
                              />
                              <Text size="s" as="p" className="!text-gray-500_03">
                                Last 24 Hours
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex flex-col items-start">
                          <div className="flex flex-col self-center items-center justify-center p-6 sm:p-5 z-[1] bg-gradient6 shadow-4xl rounded-[3px]">
                            <Img src="images/img_computer.svg" alt="computer_one" className="h-[36px] w-[36px]" />
                          </div>
                          <div className="flex flex-col self-end items-end mt-[-67px] p-2.5 relative bg-white-A700 shadow-xl rounded-md">
                            <Text as="p" className="mr-1 md:mr-0 !text-gray-500_03 text-right">
                              Fixed Issues
                            </Text>
                            <Text
                              size="2xl"
                              as="p"
                              className="mt-1.5 mr-1 md:mr-0 !text-blue_gray-800 text-right !text-[25.6px]"
                            >
                              75
                            </Text>
                            <div className="flex self-start items-end mt-[22px] gap-[3px] border-gray-200 border-t border-solid">
                              <Img
                                src="images/img_svg_gray_500_03_16x16.svg"
                                alt="svg_one"
                                className="h-[16px] w-[16px] mt-[13px]"
                              />
                              <Text size="s" as="p" className="!text-gray-500_03">
                                Tracked from Github
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center w-full">
                        <div className="flex flex-col items-start w-full">
                          <div className="flex flex-col self-center items-center p-[22px] sm:p-5 z-[1] bg-gradient7 shadow-2xl rounded-[3px]">
                            <Img src="images/img_computer.svg" alt="computer_one" className="h-[42px]" />
                          </div>
                          <div className="flex sm:flex-col self-stretch items-center mt-[-67px] relative">
                            <div className="flex flex-col items-end gap-[23px] p-2.5 bg-white-A700 shadow-xl rounded-md">
                              <div className="flex flex-col self-center gap-1.5">
                                <Text as="p" className="!text-gray-500_03 text-right">
                                  Followers
                                </Text>
                                <Text size="2xl" as="p" className="!text-blue_gray-800 text-right !text-[25.6px]">
                                  +245
                                </Text>
                              </div>
                              <div className="flex self-start items-end gap-[3px] border-gray-200 border-t border-solid">
                                <Img
                                  src="images/img_svg_16x16.svg"
                                  alt="svg_one"
                                  className="h-[16px] w-[16px] mt-[13px]"
                                />
                                <Text size="s" as="p" className="!text-gray-500_03">
                                  Just Updated
                                </Text>
                              </div>
                            </div>
                            <div className="flex self-end justify-center w-[14%] sm:w-full mb-8 ml-[-34px] p-[7px] sm:ml-0 rounded-tl-lg rounded-bl-lg relative bg-black-900_4c">
                              <Img src="images/img_computer.svg" alt="computer_three" className="h-[33px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col items-start">
                      <Button className="flex items-center justify-center ml-[15px] p-[19px] md:ml-0 z-[1] bg-gradient shadow-lg rounded-[3px]">
                        <Img src="images/img_svg_white_a700_65x62.svg" />
                      </Button>
                      <div className="flex flex-col self-stretch items-start mt-[-45px] pt-[17px] gap-[5px] relative bg-white-A700 shadow-xl rounded-md">
                        <Text size="xl" as="p" className="ml-[92px] md:ml-0 !text-blue_gray-800 !text-[18.2px]">
                          Global Sales by Top Locations
                        </Text>
                        <div className="flex md:flex-col self-stretch justify-between items-center gap-5 p-[15px]">
                          <div className="flex justify-center w-[41%] md:w-full ml-[5px] md:ml-0">
                            <div className="flex flex-col w-full gap-px">
                              <div className="flex md:flex-col justify-center flex-1">
                                <div className="flex w-[15%] md:w-full p-2 border-gray-300 border-t border-solid">
                                  <Img src="images/img_image.png" alt="usa_one" className="mt-2 mb-1.5 object-cover" />
                                </div>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  USA
                                </Text>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  2.920
                                </Text>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  53.23%
                                </Text>
                              </div>
                              <div className="flex md:flex-col justify-center flex-1">
                                <div className="flex w-[15%] md:w-full p-2 border-gray-300 border-t border-solid">
                                  <Img
                                    src="images/img_image_17x23.png"
                                    alt="image_one"
                                    className="mt-2 mb-1.5 object-cover"
                                  />
                                </div>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  Germany
                                </Text>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  1.300
                                </Text>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  20.43%
                                </Text>
                              </div>
                              <div className="flex md:flex-col justify-center flex-1">
                                <div className="flex w-[15%] md:w-full p-2 border-gray-300 border-t border-solid">
                                  <Img
                                    src="images/img_image_1.png"
                                    alt="image_one"
                                    className="mt-2 mb-1.5 object-cover"
                                  />
                                </div>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  Australia
                                </Text>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  760
                                </Text>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  10.35%
                                </Text>
                              </div>
                              <div className="flex md:flex-col justify-center flex-1">
                                <div className="flex w-[15%] md:w-full p-2 border-gray-300 border-t border-solid">
                                  <Img
                                    src="images/img_image_2.png"
                                    alt="image_one"
                                    className="mt-2 mb-1.5 object-cover"
                                  />
                                </div>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  United Kingdom
                                </Text>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  690
                                </Text>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  7.87%
                                </Text>
                              </div>
                              <div className="flex md:flex-col justify-center flex-1">
                                <div className="flex w-[15%] md:w-full p-2 border-gray-300 border-t border-solid">
                                  <Img
                                    src="images/img_image_3.png"
                                    alt="image_one"
                                    className="mt-2 mb-1.5 object-cover"
                                  />
                                </div>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  Romania
                                </Text>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  600
                                </Text>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  5.94%
                                </Text>
                              </div>
                              <div className="flex md:flex-col justify-center flex-1">
                                <div className="flex w-[15%] md:w-full p-2 border-gray-300 border-t border-solid">
                                  <Img
                                    src="images/img_image_4.png"
                                    alt="image_one"
                                    className="mt-[9px] mb-[5px] object-cover"
                                  />
                                </div>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  Brasil
                                </Text>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  550
                                </Text>
                                <Text
                                  as="p"
                                  className="pl-2 pr-[35px] py-[15px] sm:pr-5 border-gray-300 border-t border-solid"
                                >
                                  4.34%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center w-[49%] md:w-full mr-[5px] md:mr-0">
                            <div className="h-[280px] w-full md:h-auto relative">
                              <Img src="images/img_svg_gray_800.svg" alt="svg_seven" className="h-[280px]" />
                              <div className="flex flex-col w-[2%] gap-0.5 left-[10.00px] top-[9.88px] m-auto absolute">
                                <div className="h-[17px] relative">
                                  <div className="h-[16px] w-[16px] top-[0.12px] right-0 left-0 m-auto bg-gray-900 absolute rounded-[3px]" />
                                  <Text
                                    as="p"
                                    className="w-max h-max left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 text-center absolute"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="h-[17px] relative">
                                  <div className="h-[16px] w-[16px] left-0 bottom-0 right-0 top-0 m-auto bg-gray-900 absolute rounded-[3px]" />
                                  <Text
                                    as="p"
                                    className="w-max h-max left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 text-center absolute"
                                  >
                                    −
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col w-[98%] md:w-full gap-[30px]">
                    <div className="h-[308px] w-full relative">
                      <div className="flex flex-col items-center w-full gap-4 bottom-[0.00px] right-0 left-0 py-2.5 m-auto bg-white-A700 shadow-xl absolute rounded-md">
                        <div className="flex flex-col self-start items-start mt-[122px] gap-[33px] px-5">
                          <div className="flex self-center gap-[25px]">
                            <Img src="images/img_button_svg.svg" alt="buttonsvg_one" className="h-[18px] w-[18px]" />
                            <Img
                              src="images/img_button_svg_black_900.svg"
                              alt="buttonsvg_three"
                              className="h-[18px] w-[18px]"
                            />
                          </div>
                          <div className="flex flex-col items-start gap-1">
                            <Text size="xl" as="p" className="!text-blue_gray-800 !text-[18.2px]">
                              Daily Sales
                            </Text>
                            <div className="flex items-center gap-[3px]">
                              <Img
                                src="images/img_svg_green_500.svg"
                                alt="image"
                                className="self-start h-[14px] w-[14px]"
                              />
                              <Text as="p" className="self-end !text-green-500">
                                <span className="text-green-500">&nbsp;55%</span>
                                <span className="text-gray-500_03">&nbsp;increase in today sales.</span>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-end gap-[3px] border-gray-200 border-t border-solid">
                          <Img src="images/img_svg_1.svg" alt="image_one" className="h-[16px] w-[16px] mt-[13px]" />
                          <Text size="s" as="p" className="!text-gray-500_03">
                            updated 4 minutes ago
                          </Text>
                        </div>
                      </div>
                      <div className="flex justify-center w-[94%] top-[0.00px] right-0 left-0 p-[15px] m-auto bg-gradient1 shadow-2xl absolute rounded-[3px]">
                        <Img
                          src="images/img_svg_white_a700_150x453.svg"
                          alt="daily_sales_one"
                          className="h-[150px] mb-1.5"
                        />
                      </div>
                    </div>
                    <div className="h-[308px] w-full relative">
                      <div className="flex flex-col items-center w-full gap-4 bottom-[0.00px] right-0 left-0 py-2.5 m-auto bg-white-A700 shadow-xl absolute rounded-md">
                        <div className="flex flex-col self-start items-start mt-[122px] gap-[33px] px-5">
                          <div className="flex self-center gap-[25px]">
                            <Img src="images/img_button_svg.svg" alt="buttonsvg_one" className="h-[18px] w-[18px]" />
                            <Img
                              src="images/img_button_svg_black_900.svg"
                              alt="buttonsvg_three"
                              className="h-[18px] w-[18px]"
                            />
                          </div>
                          <div className="flex flex-col items-start gap-1.5">
                            <Text size="xl" as="p" className="!text-blue_gray-800 !text-[18.2px]">
                              Email Subscriptions
                            </Text>
                            <Text as="p" className="!text-gray-500_03">
                              Last Campaign Performance
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-end gap-[3px] border-gray-200 border-t border-solid">
                          <Img src="images/img_svg_1.svg" alt="svg_one" className="h-[16px] w-[16px] mt-[13px]" />
                          <Text size="s" as="p" className="!text-gray-500_03">
                            campaign sent 2 days ago
                          </Text>
                        </div>
                      </div>
                      <div className="flex justify-center w-[94%] top-[0.00px] right-0 left-0 p-[15px] m-auto bg-gradient2 shadow-3xl absolute rounded-[3px]">
                        <Img src="images/img_svg_150x453.svg" alt="svg_three" className="h-[150px] mb-1.5" />
                      </div>
                    </div>
                    <div className="h-[308px] w-full relative">
                      <div className="flex flex-col items-center w-full gap-4 bottom-[0.00px] right-0 left-0 py-2.5 m-auto bg-white-A700 shadow-xl absolute rounded-md">
                        <div className="flex flex-col self-start items-start mt-[122px] gap-[33px] px-5">
                          <div className="flex self-center gap-[25px]">
                            <Img src="images/img_button_svg.svg" alt="buttonsvg_one" className="h-[18px] w-[18px]" />
                            <Img
                              src="images/img_button_svg_black_900.svg"
                              alt="buttonsvg_three"
                              className="h-[18px] w-[18px]"
                            />
                          </div>
                          <div className="flex flex-col items-start gap-1.5">
                            <Text size="xl" as="p" className="!text-blue_gray-800 !text-[18.2px]">
                              Completed Tasks
                            </Text>
                            <Text as="p" className="!text-gray-500_03">
                              Last Campaign Performance
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-end gap-[3px] border-gray-200 border-t border-solid">
                          <Img src="images/img_svg_1.svg" alt="svg_one" className="h-[16px] w-[16px] mt-[13px]" />
                          <Text size="s" as="p" className="!text-gray-500_03">
                            campaign sent 2 days ago
                          </Text>
                        </div>
                      </div>
                      <div className="flex justify-center w-[94%] top-[0.00px] right-0 left-0 p-[15px] m-auto bg-gradient3 shadow-4xl absolute rounded-[3px]">
                        <Img src="images/img_svg_2.svg" alt="svg_three" className="h-[150px] mb-1.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col justify-center w-[86%] md:w-full gap-[29px] p-[29px] sm:p-5 border-gray-200_01 border-t border-solid flex-wrap">
            <a href="Home" target="_blank" rel="noreferrer" className="w-[2%] md:w-full leading-[21px]">
              <Text size="s" as="p" className="!text-blue_gray-800 uppercase !font-medium">
                Home
              </Text>
            </a>
            <a href="Company" target="_blank" rel="noreferrer" className="w-[4%] md:w-full leading-[21px]">
              <Text size="s" as="p" className="!text-blue_gray-800 uppercase !font-medium">
                Company
              </Text>
            </a>
            <a href="Portfolio" target="_blank" rel="noreferrer" className="w-[4%] md:w-full leading-[21px]">
              <Text size="s" as="p" className="!text-blue_gray-800 uppercase !font-medium">
                Portfolio
              </Text>
            </a>
            <a href="Blog" target="_blank" rel="noreferrer" className="w-[64%] md:w-full leading-[21px]">
              <Text size="s" as="p" className="!text-blue_gray-800 uppercase !font-medium">
                Blog
              </Text>
            </a>
            <Text as="p" className="!text-blue_gray-800">
              <span className="text-blue_gray-800">© 2024&nbsp;</span>
              <span className="text-purple-500">Creative Tim, made with love for a better web</span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
