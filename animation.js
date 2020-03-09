/**
 *  Animation.js
 *  @desc The script below manages the line animation. Note make sure to import the
 *  constantEnumerate.js file, the animation time (e.g. ANIMATION_DELAY) are need to timed
 *  animation runtime.
 *  @static
 */

/**
 *
 * @param {string} message
 * @param {number} timeout
 * @returns {Promise<unknown>[]}
 */
const typingPromises = (message, timeout) =>
    [...message].map(
        (ch, i) =>
            new Promise(resolve => {
                setTimeout(() => {
                    resolve(message.substring(0, i + 1));
                }, timeout * i);
            })
    );

$(document).ready(() => {
    let bypass = true;
    let currentPhase = 0;
    let option = '';
    // Need to accomidate
    $(document).hover(()=>{
        $("#video").get(0).play();
    });

    $("#sole-check").click(()=>{
        // play sound
        $("#sole-check").attr('src', './img/check_box_filled.png');
        playClick();
        setTimeout(() =>{
            option = 'sole';
            currentPhase = 1;
            $("#home").hide();
            $("#outer-circle").css('left', '127px');
            $("#sole-image").attr('src', './img/arrow_button_b.png');
            $("#pk-page").show();
            phaseOneAnimation();
            appendSection1();
            $("#section-1").attr('src', './img/acq_strat_button_hover.png');
        }, 2000)
    });

    $("#competitive-check").click(()=>{
        // TODO: to be implemented in the future, disable att
        // play sound
        // let audio = $("#mysoundclip")[0];
        //
        // $("#competitive-check").attr('src', './img/check_box_filled.png');
        // audio.play();
        // setTimeout(() =>{
        //     option = 'competative';
        //     $("#home").hide();
        //     $("#outer-circle").css('left', '452px');
        //     $("#competitive-image").attr('src', './img/arrow_button_b.png');
        //     $("#pk-page").show();
        // }, 2000)

    });

    /**
     * @desc Animation for Section-1
     */
    $("#section-1").click(() => {
        phaseOneAnimation();
    });

    $("#section-2").click(() =>{
        phaseTwoAnimation();
    });

    $("#section-3").click(() =>{
        phaseThreeAnimation();

    });

    $("#section-4").click(() =>{
        phaseFourAnimation();

    });

    $("#section-5").click(() =>{
        phaseFiveAnimation();

    });

    $("#section-6").click(() =>{
        phaseSixAnimation();


    });
    $("#section-7").click(() =>{
        phaseSevenAnimation();

    });
    $("#section-8").click(() =>{
        phaseEightAnimation();

    });
    $("#section-9").click(() =>{
        phaseNineAnimation();

    });
    $("#section-10").click(() =>{
        phaseTenAnimation();

    });


    /**
     * @desc Animation line for phase 1
     */
    function phaseOneAnimation() {
        if(!bypass) return;
        bypass = false;
        resetLineAnimation();
        currentPhase = 1;
        $("#section-1").attr('src', './img/acq_strat_button_hover.png');
        appendSection1();
        $(".dot4").css('background-color', LINE_COLOR);
        $(".dot4").animate({
            width: '392px'
        }, {
            duration: ANIMATION_DELAY,
            complete: () => {
                $(".dot5").css('background-color', LINE_COLOR);
                $(".dot5").animate({
                    height: '79px'
                }, {
                    duration: ANIMATION_DELAY_FAST,
                    complete: () => {
                        $(".dot1").css('background-color', LINE_COLOR);
                        $(".dot1").animate({
                            height: '18px'
                        }, {
                            duration: ANIMATION_DELAY_FAST,
                            complete: () => {
                                $(".dot6").css('background-color', LINE_COLOR);
                                $(".dot6").animate({
                                    width: '510px',
                                }, {
                                    duration: ANIMATION_DELAY,
                                    complete: () => {
                                        $(".dot2").css('background-color', LINE_COLOR);
                                        $(".dot2").animate({
                                            height: '30px'
                                        }, {
                                            duration: ANIMATION_DELAY_FAST,
                                            complete: () => {
                                                bypass = true;
                                            }
                                        });

                                    }
                                })
                            }
                        })

                    }
                });
            }
        });
    }

    /**
     * @desc Animation for Section-1
     */
    function phaseTwoAnimation(){
        if(!bypass) return;
        bypass = false;
        resetLineAnimation();
        appendSection2();
        currentPhase = 2;
        $("#section-2").attr('src', './img/rfp_review_button_hover.png');

        $(".dot4").css('background-color', LINE_COLOR);
        $(".dot4").animate({
            width: '269px'
        }, {
            duration: ANIMATION_DELAY,
            complete: () => {
                $(".dot7").css('background-color', LINE_COLOR);
                $(".dot7").animate({
                    height: '76px'
                }, {
                    duration: ANIMATION_DELAY_FAST,
                    complete: () => {
                        $(".dot3").css('background-color', LINE_COLOR);
                        $(".dot3").animate({
                            height: '18px'
                        }, {
                            duration: ANIMATION_DELAY_FAST,
                            complete: () => {
                                $(".dot17").css('background-color', LINE_COLOR);
                                $(".dot17").animate({
                                    width: '387px',
                                }, {
                                    duration: ANIMATION_DELAY,
                                    complete: () => {
                                        $(".dot2").css('background-color', LINE_COLOR);
                                        $(".dot2").animate({
                                            height: '30px'
                                        }, {
                                            duration: ANIMATION_DELAY_FAST,
                                            complete: () => {
                                                bypass = true;
                                            }
                                        });
                                    }
                                });

                            }
                        })

                    }
                })
            }
        });
    };

    /**
     * @desc Line animation
     */
    function phaseThreeAnimation() {
        if(!bypass) return;
        bypass = false;
        resetLineAnimation();
        appendSection3();
        currentPhase = 3;
        $("#section-3").attr('src', './img/pre_proposal_button_hover.png');

        $(".dot4").css('background-color', LINE_COLOR);
        $(".dot4").animate({
            width: '134px'
        }, {
            duration: ANIMATION_DELAY_FAST,
            complete: () => {
                $(".dot10").css('background-color', LINE_COLOR);
                $(".dot10").animate({
                    height: '80px'
                }, {
                    duration: ANIMATION_DELAY,
                    complete: () => {
                        $(".dot18").css('background-color', LINE_COLOR);
                        $(".dot18").animate({
                            height: '18px'
                        }, {
                            duration: ANIMATION_DELAY_FAST,
                            complete: () => {
                                $(".dot9").css('background-color', LINE_COLOR);
                                $(".dot9").animate({
                                    width: '250px'
                                }, {
                                    duration: ANIMATION_DELAY,
                                    complete: () =>{
                                        $(".dot2").css('background-color', LINE_COLOR);
                                        $(".dot2").animate({
                                            height: '30px'
                                        }, {
                                            duration: ANIMATION_DELAY_FAST,
                                            complete: () => {
                                                bypass = true;
                                            }
                                        });
                                    }
                                })
                            }
                        })


                    }
                })
            }
        })
    };
    /**
     * @desc Line animation
     */
    function phaseFourAnimation() {
        if(!bypass) return;
        bypass = false;
        resetLineAnimation();
        appendSection4();
        currentPhase = 4;
        $("#section-4").attr('src', './img/cost_price_button_hover.png');

        $(".dot8").css('background-color', LINE_COLOR);
        $(".dot8").animate({
            height: '25px'
        }, {
            duration: ANIMATION_DELAY,
            complete: () => {
                $(".dot11").css('background-color', LINE_COLOR);
                $(".dot11").animate({
                    width: '38px'
                }, {
                    duration: ANIMATION_DELAY_FAST,
                    complete: () =>{
                        $(".dot12").css('background-color', LINE_COLOR);
                        $(".dot12").animate({
                            height: '22px'
                        }, {
                            duration: ANIMATION_DELAY_FAST,
                            complete: () =>{
                                $(".dot19").css('background-color', LINE_COLOR);
                                $(".dot19").animate({
                                    height: '18px'
                                }, {
                                    duration: ANIMATION_DELAY_FAST,
                                    complete: () =>{
                                        $(".dot20").css('background-color', LINE_COLOR);
                                        $(".dot20").animate({
                                            width: '121px'
                                        }, {
                                            duration: ANIMATION_DELAY,
                                            complete: () =>{
                                                $(".dot2").css('background-color', LINE_COLOR);
                                                $(".dot2").animate({
                                                    height: '30px'
                                                }, {
                                                    duration: ANIMATION_DELAY_FAST,
                                                    complete: () => {
                                                        bypass = true;
                                                    }
                                                });
                                            }
                                        });
                                    }
                                })

                            }
                        })


                    }
                })
            }
        })
    };

    /**
     * @desc Line animation
     */
    function phaseFiveAnimation(){
        if(!bypass) return;
        bypass = false;
        resetLineAnimation();
        appendSection5();
        currentPhase =5;
        $("#section-5").attr('src', './img/tech_eval_review_button_hover.png');

        $(".dot8").css('background-color', LINE_COLOR);
        $(".dot8").animate({
            height: '25px'
        }, {
            duration: ANIMATION_DELAY_FAST,
            complete: () => {
                $(".dot13").css('background-color', LINE_COLOR);
                $(".dot13").animate({
                    width: '97px'
                }, {
                    duration: ANIMATION_DELAY,
                    complete: () => {
                        $(".dot14").css('background-color', LINE_COLOR);
                        $(".dot14").animate({
                            height: '24px'
                        }, {
                            duration: ANIMATION_DELAY_FAST,
                            complete: () => {
                                $(".dot21").css('background-color', LINE_COLOR);
                                $(".dot21").animate({
                                    height: '18px'
                                }, {
                                    duration: ANIMATION_DELAY_FAST,
                                    complete: () => {
                                        $(".dot22").css('background-color', LINE_COLOR);
                                        $(".dot22").animate({
                                            width: '14px'
                                        }, {
                                            duration: ANIMATION_DELAY_FAST,
                                            complete: () => {
                                                $(".dot2").css('background-color', LINE_COLOR);
                                                $(".dot2").animate({
                                                    height: '30px'
                                                }, {
                                                    duration: ANIMATION_DELAY_FAST,
                                                    complete: () => {
                                                        bypass = true;
                                                    }
                                                });
                                            }
                                        })

                                    }
                                })

                            }
                        })
                    }
                })
            }
        });
    };
    /**
     * @desc Line animation
     */
    function phaseSixAnimation(){
        if(!bypass) return;
        bypass = false;
        resetLineAnimation();
        appendSection6();
        currentPhase = 6;
        $("#section-6").attr('src', './img/develop_afo_button_hover.png');

        $(".dot8").css('background-color', LINE_COLOR);
        $(".dot8").animate({
            height: '25px'
        }, {
            duration: ANIMATION_DELAY_FAST,
            complete: () => {
                $(".dot13").css('background-color', LINE_COLOR);
                $(".dot13").animate({
                    width: '224px'
                }, {
                    duration: ANIMATION_DELAY,
                    complete: () => {
                        $(".dot15").css('background-color', LINE_COLOR);
                        $(".dot15").animate({
                            height: '22px'
                        }, {
                            duration: ANIMATION_DELAY_FAST,
                            complete: () => {
                                $(".dot23").css('background-color', LINE_COLOR);
                                $(".dot23").animate({
                                    height: '14px'
                                }, {
                                    duration: ANIMATION_DELAY_FAST,
                                    complete: () => {
                                        $(".dot24").css('background-color', LINE_COLOR);
                                        $(".dot24").animate({
                                            width: '141px'
                                        }, {
                                            duration: ANIMATION_DELAY,
                                            complete: () => {
                                                $(".dot2").css('background-color', LINE_COLOR);
                                                $(".dot2").animate({
                                                    height: '30px'
                                                }, {
                                                    duration: ANIMATION_DELAY_FAST,
                                                    complete: () => {

                                                        bypass = true;
                                                    }
                                                });
                                            }
                                        })

                                    }
                                })

                            }
                        })
                    }
                })
            }
        });
    };
    /**
     * @desc Line animation
     */
    function phaseSevenAnimation() {
        if(!bypass) return;
        bypass = false;
        resetLineAnimation();
        appendSection7();
        currentPhase = 7;
        $("#section-7").attr('src', './img/pre_pnm_button_hover.png');

        $(".dot8").css('background-color', LINE_COLOR);
        $(".dot8").animate({
            height: '25px'
        }, {
            duration: ANIMATION_DELAY_FAST,
            complete: () => {
                $(".dot13").css('background-color', LINE_COLOR);
                $(".dot13").animate({
                    width: '355px'
                }, {
                    duration: ANIMATION_DELAY,
                    complete: () => {
                        $(".dot16").css('background-color', LINE_COLOR);
                        $(".dot16").animate({
                            height: '25px'
                        }, {
                            duration: ANIMATION_DELAY_FAST,
                            complete: () => {
                                $(".dot25").css('background-color', LINE_COLOR);
                                $(".dot25").animate({
                                    height: '14px'
                                }, {
                                    duration: ANIMATION_DELAY_FAST,
                                    complete: () => {
                                        $(".dot26").css('background-color', LINE_COLOR);
                                        $(".dot26").animate({
                                            width: '273px'
                                        }, {
                                            duration: ANIMATION_DELAY,
                                            complete: () => {
                                                $(".dot2").css('background-color', LINE_COLOR);
                                                $(".dot2").animate({
                                                    height: '30px'
                                                }, {
                                                    duration: ANIMATION_DELAY_FAST,
                                                    complete: () => {
                                                        bypass = true;
                                                    }
                                                });
                                            }
                                        })

                                    }
                                });

                            }
                        })
                    }
                })
            }
        });

    };

    function phaseEightAnimation() {
        if(!bypass) return;
        bypass = false;
        resetLineAnimation();
        appendSection8();
        currentPhase = 8;
        $("#section-8").attr('src', './img/business_clearance_button_hover.png');

        $(".dot8").css('background-color', LINE_COLOR);
        $(".dot8").animate({
            height: '25px'
        }, {
            duration: ANIMATION_DELAY_FAST,
            complete: () => {
                $(".dot13").css('background-color', LINE_COLOR);
                $(".dot13").animate({
                    width: '482px'
                }, {
                    duration: ANIMATION_DELAY,
                    complete: () => {
                        $(".dot27").css('background-color', LINE_COLOR);
                        $(".dot27").animate({
                            height: '25px'
                        }, {
                            duration: ANIMATION_DELAY_FAST,
                            complete: () => {
                                $(".dot28").css('background-color', LINE_COLOR);
                                $(".dot28").animate({
                                    height: '18px'
                                }, {
                                    duration: ANIMATION_DELAY_FAST,
                                    complete: () => {
                                        $(".dot29").css('background-color', LINE_COLOR);
                                        $(".dot29").animate({
                                            width: '397px'
                                        }, {
                                            duration: ANIMATION_DELAY,
                                            complete: () => {
                                                $(".dot2").css('background-color', LINE_COLOR);
                                                $(".dot2").animate({
                                                    height: '30px'
                                                }, {
                                                    duration: ANIMATION_DELAY_FAST,
                                                    complete: () => {
                                                        bypass = true;
                                                    }
                                                });
                                            }
                                        })
                                    }
                                })

                            }
                        })

                    }
                })
            }
        })


    };
    function phaseNineAnimation(){
        if(!bypass) return;
        bypass = false;
        resetLineAnimation();
        appendSection9();
        currentPhase = 9;
        $("#section-9").attr('src', './img/negotiations_button_hover.png');

        $(".dot8").css('background-color', LINE_COLOR);
        $(".dot8").animate({
            height: '25px'
        }, {
            duration: ANIMATION_DELAY_FAST,
            complete: () => {
                $(".dot13").css('background-color', LINE_COLOR);
                $(".dot13").animate({
                    width: '614px'
                }, {
                    duration: ANIMATION_DELAY,
                    complete: () => {
                        $(".dot30").css('background-color', LINE_COLOR);
                        $(".dot30").animate({
                            height: '25px'
                        }, {
                            duration: ANIMATION_DELAY_FAST,
                            complete: () => {
                                $(".dot31").css('background-color', LINE_COLOR);
                                $(".dot31").animate({
                                    height: '18px'
                                }, {
                                    duration: ANIMATION_DELAY_FAST,
                                    complete: () => {
                                        $(".dot32").css('background-color', LINE_COLOR);
                                        $(".dot32").animate({
                                            width: '527px'
                                        }, {
                                            durationP: ANIMATION_DELAY,
                                            complete: () => {
                                                $(".dot2").css('background-color', LINE_COLOR);
                                                $(".dot2").animate({
                                                    height: '30px'
                                                }, {
                                                    duration: ANIMATION_DELAY_FAST,
                                                    complete: () => {
                                                        bypass = true;
                                                    }
                                                });
                                            }
                                        })


                                    }
                                })
                            }
                        })

                    }
                })
            }
        })
    };

    function phaseTenAnimation(){
        if(!bypass) return;
        bypass = false;
        resetLineAnimation();
        appendSection10();
        currentPhase = 10;
        $("#section-10").attr('src', './img/final_pnm_button_hover.png');

        $(".dot8").css('background-color', LINE_COLOR);
        $(".dot8").animate({
            height: '25px'
        }, {
            duration: ANIMATION_DELAY_FAST,
            complete: () => {
                $(".dot13").css('background-color', LINE_COLOR);
                $(".dot13").animate({
                    width: '745px'
                }, {
                    duration: ANIMATION_DELAY,
                    complete: () => {
                        $(".dot33").css('background-color', LINE_COLOR);
                        $(".dot33").animate({
                            height: '25px'
                        }, {
                            duration: ANIMATION_DELAY_FAST,
                            complete: () => {
                                $(".dot34").css('background-color', LINE_COLOR);
                                $(".dot34").animate({
                                    height: '18px'
                                }, {
                                    duration: ANIMATION_DELAY_FAST,
                                    complete: () => {
                                        $(".dot35").css('background-color', LINE_COLOR);
                                        $(".dot35").animate({
                                            width: '664px'
                                        }, {
                                            duration: ANIMATION_DELAY,
                                            complete: () => {
                                                $(".dot2").css('background-color', LINE_COLOR);
                                                $(".dot2").animate({
                                                    height: '30px'
                                                }, {
                                                    duration: ANIMATION_DELAY_FAST,
                                                    complete: () => {
                                                        bypass = true;
                                                    }
                                                });
                                            }
                                        })
                                    }
                                })

                            }

                        })
                    }
                })
            }
        })

    };


    /**
     * @desc Reset Line Animation to their original position
     */
    function resetLineAnimation() {
        // Clear out any html/text in the Scroll divs
        $(".scroll").fadeOut(function () {
            $(".scroll").empty();
        });
        $("#g-text").empty();
        $("#activity-div").empty();
        $("#guidance-div").empty();
        $("#output-div").empty();
        $("button").hide();
        $("#section-1").attr('src', './img/acq_strat_button_b.png');
        $("#section-2").attr('src', './img/rfp_review_button_b.png');
        $("#section-3").attr('src', './img/pre_proposal_button_b.png');
        $("#section-4").attr('src', './img/cost_price_button_b.png');
        $("#section-5").attr('src', './img/tech_eval_review_button_b.png');
        $("#section-6").attr('src', './img/develop_afo_button_b.png');
        $("#section-7").attr('src', './img/pre_pnm_button_b.png');
        $("#section-8").attr('src', './img/business_clearance_button_b.png');
        $("#section-9").attr('src', './img/negotiations_button_b.png');
        $("#section-10").attr('src', './img/final_pnm_button_b.png');

        // Animation options
        $(".dot1").css({
            'top': '295px',
            'left': '94px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot2").css({
            'top': '310px',
            'left': '600px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot3").css({
            'top': '295px',
            'left': '217px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot4").css({
            'top': '141px',
            'right': '878px',
            'height': '4px',
            'width': '1px',
            'background-color': ''
        });
        $(".dot5").css({
            'top': '141px',
            'left': '94px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot6").css({
            'top': '310px',
            'left': '94px',
            'height': '4px',
            'width': '1px',
            'background-color': ''
        });
        $(".dot7").css({
            'top': '145px',
            'left': '217px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot8").css({
            'top': '174px',
            'left': '514px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot9").css({
            'top': '310px',
            'left': '350px',
            'height': '4px',
            'width': '1px',
            'background-color': ''
        });
        $(".dot10").css({
            'top': '141px',
            'right': '1010px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot11").css({
            'top': '195px',
            'right': '846px',
            'height': '4px',
            'width': '1px',
            'background-color': ''
        });
        $(".dot12").css({
            'top': '198px',
            'right': '880px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot13").css({
            'top': '195px',
            'left': '518px',
            'height': '4px',
            'width': '1px',
            'background-color': ''
        });
        $(".dot14").css({
            'top': '195px',
            'left': '611px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot15").css({
            'top': '196px',
            'left': '738px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot16").css({
            'top': '195px',
            'left': '869px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot17").css({
            'top': '310px',
            'left': '217px',
            'height': '4px',
            'width': '1px',
            'background-color': ''
        });
        $(".dot18").css({
            'top': '295px',
            'left': '350px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot19").css({
            'top': '295px',
            'left': '480px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot20").css({
            'top': '310px',
            'left': '480px',
            'height': '4px',
            'width': '1px',
            'background-color': ''
        });
        $(".dot21").css({
            'top': '295px',
            'left': '610px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot22").css({
            'top': '309px',
            'right': '750px',
            'height': '4px',
            'width': '1px',
            'background-color': ''
        });
        $(".dot23").css({
            'top': '296px',
            'left': '738px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot24").css({
            'top': '309px',
            'right': '622px',
            'height': '4px',
            'width': '1px',
            'background-color': ''
        });
        $(".dot25").css({
            'top': '296px',
            'left': '869px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot26").css({
            'top': '309px',
            'right': '491px',
            'height': '4px',
            'width': '1px',
            'background-color': ''
        });
        $(".dot27").css({
            'top': '195px',
            'left': '996px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot28").css({
            'top': '295px',
            'left': '996px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot29").css({
            'top': '309px',
            'right': '366px',
            'height': '4px',
            'width': '1px',
            'background-color': ''
        });
        $(".dot30").css({
            'top': '195px',
            'left': '1128px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot31").css({
            'top': '295px',
            'left': '1128px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot32").css({
            'top': '309px',
            'right': '236px',
            'height': '4px',
            'width': '1px',
            'background-color': ''
        });
        $(".dot33").css({
            'top': '195px',
            'left': '1263px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot34").css({
            'top': '295px',
            'left': '1263px',
            'height': '1px',
            'width': '4px',
            'background-color': ''
        });
        $(".dot35").css({
            'top': '309px',
            'right': '100px',
            'height': '4px',
            'width': '1px',
            'background-color': ''
        });
    }

    /**
     * ON HOOVER change color
     */
    $("#scenarios-logo").hover(() =>{
        $("#page-icon").attr('src', './img/top_button_green.png');
    }, () =>{
        $("#page-icon").attr('src', './img/top_button_blue.png');
    });

    $("#resources-logo").hover(() =>{
        $("#page-icon-2").attr('src', './img/top_button_green.png');
    }, () =>{
        $("#page-icon-2").attr('src', './img/top_button_blue.png');
    });

    /**
     * BACK and NEXT BUTTONS
     */

    $("#back-button").click(()=>{
        playClick();
        if(currentPhase === 1){
            // go back to the home page
            $("#sole-check").attr('src', './img/check_box_empty.png');
            $("#competitive-check").attr('src', './img/check_box_empty.png');
            resetLineAnimation();
            $("#pk-page").hide();
            $("#home").show();
            return;
        }
        currentPhase--;
        startAnimation(currentPhase);
    });
    $("#next-button").click(()=>{
        playClick();
        if(currentPhase === 10) return;
        currentPhase++;
        startAnimation(currentPhase);
    });

    $("#home-icon").click(() => {
        $("#sole-check").attr('src', './img/check_box_empty.png');
        $("#competitive-check").attr('src', './img/check_box_empty.png');
        resetLineAnimation();
        $("#pk-page").hide();
        $("#home").show();
    });

    function startAnimation(level) {
        switch (level) {
            case 1:
                phaseOneAnimation();
                $("#section-1").attr('src', './img/acq_strat_button_hover.png');
                appendSection1();
                break;
            case 2:
                phaseTwoAnimation();
                $("#section-2").attr('src', './img/rfp_review_button_hover.png');
                break;
            case 3:
                phaseThreeAnimation();
                $("#section-3").attr('src', './img/pre_proposal_button_hover.png');
                break;
            case 4:
                phaseFourAnimation();
                $("#section-4").attr('src', './img/cost_price_button_hover.png');
                break;
            case 5:
                phaseFiveAnimation();
                $("#section-5").attr('src', './img/tech_eval_review_button_hover.png');
                break;
            case 6:
                phaseSixAnimation();
                $("#section-6").attr('src', './img/develop_afo_button_hover.png');
                break;
            case 7:
                phaseSevenAnimation();
                $("#section-7").attr('src', './img/pre_pnm_button_hover.png');
                break;
            case 8:
                phaseEightAnimation();
                $("#section-8").attr('src', './img/business_clearance_button_hover.png');
                break;
            case 9:
                phaseNineAnimation();
                $("#section-9").attr('src', './img/negotiations_button_hover.png');
                break;
            case 10:
                phaseTenAnimation();
                $("#section-10").attr('src', './img/final_pnm_button_hover.png');
                break;
            default:
                break;
        }
    }


    // $("#section-1").hover(() =>{
    //     $("#section-1").attr('src', './img/acq_strat_button_hover.png');
    // }, () =>{
    //     $("#section-1").attr('src', './img/acq_strat_button_b.png');
    // });

    // $("#section-1").click(() =>{
    //     $("#section-1").attr('src', './img/acq_strat_button_hover.png');
    // });

    // $("#section-2").hover(() =>{
    //     $("#section-2").attr('src', './img/rfp_review_button_hover.png');
    // }, () =>{
    //     $("#section-2").attr('src', './img/rfp_review_button_b.png');
    // });
    //
    // $("#section-3").hover(() =>{
    //     $("#section-3").attr('src', './img/pre_proposal_button_hover.png');
    // }, () =>{
    //     $("#section-3").attr('src', './img/pre_proposal_button_b.png');
    // });
    //
    // $("#section-4").hover(() =>{
    //     $("#section-4").attr('src', './img/cost_price_button_hover.png');
    // }, () =>{
    //     $("#section-4").attr('src', './img/cost_price_button_b.png');
    // });
    //
    // $("#section-5").hover(() =>{
    //     $("#section-5").attr('src', './img/tech_eval_review_button_hover.png');
    // }, () =>{
    //     $("#section-5").attr('src', './img/tech_eval_review_button_b.png');
    // });
    //
    // $("#section-6").hover(() =>{
    //     $("#section-6").attr('src', './img/develop_afo_button_hover.png');
    // }, () =>{
    //     $("#section-6").attr('src', './img/develop_afo_button_b.png');
    // });
    //
    // $("#section-7").hover(() =>{
    //     $("#section-7").attr('src', './img/pre_pnm_button_hover.png');
    // }, () =>{
    //     $("#section-7").attr('src', './img/pre_pnm_button_b.png');
    // });
    //
    // $("#section-8").hover(() =>{
    //     $("#section-8").attr('src', './img/business_clearance_button_hover.png');
    // }, () =>{
    //     $("#section-8").attr('src', './img/business_clearance_button_b.png');
    // });
    //
    // $("#section-9").hover(() =>{
    //     $("#section-9").attr('src', './img/negotiations_button_hover.png');
    // }, () =>{
    //     $("#section-9").attr('src', './img/negotiations_button_b.png');
    // });
    //
    // $("#section-10").hover(() =>{
    //     $("#section-10").attr('src', './img/final_pnm_button_hover.png');
    // }, () =>{
    //     $("#section-10").attr('src', './img/final_pnm_button_b.png');
    // });

    /**
     * END OF HOVER EFFECTS
     */

    /**
     * APPEND to ACTIVITIES
     */
    function appendSection1(){
        $("#activity-div").append(`
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="first-check-1">
                <div class="inner-text">
                    <span id="fs1-1"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="first-check-2">
                <div class="inner-text">
                    <span id="fs1-2"></span>
                </div>
            </div>
        `);
        typingPromises(PHASE_1_POINT_1, MEDIUM_TYPE_SPEED).forEach(promise => {
            promise.then(portion => {
                document.querySelector('#fs1-1').innerHTML = portion;
            });
        });
        setTimeout(function(){
            typingPromises(PHASE_1_POINT_2, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs1-2').innerHTML = portion;
                });
            });
        }, PHASE_1_POINT_1.length * MEDIUM_TYPE_SPEED);
    }

    function appendSection2() {
        $("#activity-div").append(`
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="second-check-1">
                <div class="inner-text">
                    <span id="fs2-1"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="second-check-2">
                <div class="inner-text">
                    <span id="fs2-2"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="second-check-3">
                <div class="inner-text">
                    <span id="fs2-3"></span>
                </div>
            </div>
        `);
        typingPromises(PHASE_2_POINT_1, MEDIUM_TYPE_SPEED).forEach(promise => {
            promise.then(portion => {
                document.querySelector('#fs2-1').innerHTML = portion;
            });
        });
        setTimeout(function(){
            typingPromises(PHASE_2_POINT_2, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs2-2').innerHTML = portion;
                });
            });
        }, PHASE_2_POINT_1.length * MEDIUM_TYPE_SPEED);

        setTimeout(function(){
            typingPromises(PHASE_2_POINT_3, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs2-3').innerHTML = portion;
                });
            });
        }, (PHASE_2_POINT_2.length +PHASE_2_POINT_1.length) * MEDIUM_TYPE_SPEED);
    }

    function appendSection3() {
        $("#activity-div").append(`
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="third-check-1">
                <div class="inner-text">
                    <span id="fs3-1"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="third-check-2">
                <div class="inner-text">
                    <span id="fs3-2"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="third-check-3">
                <div class="inner-text">
                    <span id="fs3-3"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="third-check-4">
                <div class="inner-text">
                    <span id="fs3-4"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="third-check-5">
                <div class="inner-text">
                    <span id="fs3-5"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="third-check-6">
                <div class="inner-text">
                    <span id="fs3-6"></span>
                </div>
            </div>
             <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="third-check-7">
                <div class="inner-text">
                    <span id="fs3-7"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="third-check-8">
                <div class="inner-text">
                    <span id="fs3-8"></span>
                </div>
            </div>
        `);
        typingPromises(PHASE_3_POINT_1, MEDIUM_TYPE_SPEED).forEach(promise => {
            promise.then(portion => {
                document.querySelector('#fs3-1').innerHTML = portion;
            });
        });
        setTimeout(function(){
            typingPromises(PHASE_3_POINT_2, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs3-2').innerHTML = portion;
                });
            });
        }, PHASE_3_POINT_1.length * MEDIUM_TYPE_SPEED);

        setTimeout(function () {
            typingPromises(PHASE_3_POINT_3, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs3-3').innerHTML = portion;
                });
            });
        },(PHASE_3_POINT_2.length +PHASE_3_POINT_1.length) * MEDIUM_TYPE_SPEED);

        setTimeout(function(){

            typingPromises(PHASE_3_POINT_4, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs3-4').innerHTML = portion;
                });
            });
            typingPromises(PHASE_3_POINT_5, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs3-5').innerHTML = portion;
                });
            });
            typingPromises(PHASE_3_POINT_6, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs3-6').innerHTML = portion;
                });
            });
            typingPromises(PHASE_3_POINT_7, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs3-7').innerHTML = portion;
                });
            });
            typingPromises(PHASE_3_POINT_8, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs3-8').innerHTML = portion;
                });
            });
        }, (PHASE_3_POINT_2.length +PHASE_3_POINT_1.length + PHASE_3_POINT_3.length) * MEDIUM_TYPE_SPEED);


    }
    function appendSection4() {
        $("#activity-div").append(`
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-1">
                <div class="inner-text">
                    <span id="fs4-1"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-2">
                <div class="inner-text">
                    <span id="fs4-2"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-3">
                <div class="inner-text">
                    <span id="fs4-3"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-4">
                <div class="inner-text">
                    <span id="fs4-4"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-5">
                <div class="inner-text">
                    <span id="fs4-5"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-6">
                <div class="inner-text">
                    <span id="fs4-6"></span>
                </div>
            </div>
             <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-7">
                <div class="inner-text">
                    <span id="fs4-7"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-8">
                <div class="inner-text">
                    <span id="fs4-8"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-9">
                <div class="inner-text">
                    <span id="fs4-9"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-10">
                <div class="inner-text">
                    <span id="fs4-10"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-11">
                <div class="inner-text">
                    <span id="fs4-11"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-12">
                <div class="inner-text">
                    <span id="fs4-12"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-13">
                <div class="inner-text">
                    <span id="fs4-13"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-14">
                <div class="inner-text">
                    <span id="fs4-14"></span>
                </div>
            </div>
             <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-15">
                <div class="inner-text">
                    <span id="fs4-15"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-16">
                <div class="inner-text">
                    <span id="fs4-16"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fourth-check-17">
                <div class="inner-text">
                    <span id="fs4-17"></span>
                </div>
            </div>
        `);
        typingPromises(PHASE_4_POINT_1, MEDIUM_TYPE_SPEED).forEach(promise => {
            promise.then(portion => {
                document.querySelector('#fs4-1').innerHTML = portion;
            });
        });
        setTimeout(function(){
            typingPromises(PHASE_4_POINT_2, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-2').innerHTML = portion;
                });
            });
        }, PHASE_4_POINT_1.length * MEDIUM_TYPE_SPEED);

        setTimeout(function(){
            typingPromises(PHASE_4_POINT_3, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-3').innerHTML = portion;
                });
            });
            typingPromises(PHASE_4_POINT_4, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-4').innerHTML = portion;
                });
            });
            typingPromises(PHASE_4_POINT_5, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-5').innerHTML = portion;
                });
            });
            typingPromises(PHASE_4_POINT_6, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-6').innerHTML = portion;
                });
            });
            typingPromises(PHASE_4_POINT_7, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-7').innerHTML = portion;
                });
            });
            typingPromises(PHASE_4_POINT_8, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-8').innerHTML = portion;
                });
            });
            typingPromises(PHASE_4_POINT_9, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-9').innerHTML = portion;
                });
            });
            typingPromises(PHASE_4_POINT_10, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-10').innerHTML = portion;
                });
            });
            typingPromises(PHASE_4_POINT_11, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-11').innerHTML = portion;
                });
            });
            typingPromises(PHASE_4_POINT_12, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-12').innerHTML = portion;
                });
            });
            typingPromises(PHASE_4_POINT_13, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-13').innerHTML = portion;
                });
            });
            typingPromises(PHASE_4_POINT_14, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-14').innerHTML = portion;
                });
            });
            typingPromises(PHASE_4_POINT_15, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-15').innerHTML = portion;
                });
            });
            typingPromises(PHASE_4_POINT_16, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-16').innerHTML = portion;
                });
            });
            typingPromises(PHASE_4_POINT_17, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs4-17').innerHTML = portion;
                });
            });

        }, (PHASE_4_POINT_2.length +PHASE_4_POINT_1.length) * MEDIUM_TYPE_SPEED);


    }
    function appendSection5() {
        $("#activity-div").append(`
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fifth-check-1">
                <div class="inner-text">
                    <span id="fs5-1"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="fifth-check-2">
                <div class="inner-text">
                    <span id="fs5-2"></span>
                </div>
            </div>
        `);
        typingPromises(PHASE_5_POINT_1, MEDIUM_TYPE_SPEED).forEach(promise => {
            promise.then(portion => {
                document.querySelector('#fs5-1').innerHTML = portion;
            });
        });
        setTimeout(function(){
            typingPromises(PHASE_5_POINT_2, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs5-2').innerHTML = portion;
                });
            });
        }, PHASE_5_POINT_1.length * MEDIUM_TYPE_SPEED);
    }

    function appendSection6() {
        $("#activity-div").append(`
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="sixth-check-1">
                <div class="inner-text">
                    <span id="fs6-1"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="sixth-check-2">
                <div class="inner-text">
                    <span id="fs6-2"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="sixth-check-3">
                <div class="inner-text">
                    <span id="fs6-3"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="sixth-check-4">
                <div class="inner-text">
                    <span id="fs6-4"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="sixth-check-5">
                <div class="inner-text">
                    <span id="fs6-5"></span>
                </div>
            </div>
        `);
        typingPromises(PHASE_6_POINT_1, MEDIUM_TYPE_SPEED).forEach(promise => {
            promise.then(portion => {
                document.querySelector('#fs6-1').innerHTML = portion;
            });
        });
        setTimeout(function(){
            typingPromises(PHASE_6_POINT_2, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs6-2').innerHTML = portion;
                });
            });
        }, PHASE_6_POINT_1.length * MEDIUM_TYPE_SPEED);

        setTimeout(function(){
            typingPromises(PHASE_6_POINT_3, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs6-3').innerHTML = portion;
                });
            });
        }, (PHASE_6_POINT_1.length + PHASE_6_POINT_2.length) * MEDIUM_TYPE_SPEED);

        setTimeout(function(){
            typingPromises(PHASE_6_POINT_4, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs6-4').innerHTML = portion;
                });
            });
            typingPromises(PHASE_6_POINT_5, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs6-5').innerHTML = portion;
                });
            });
        }, (PHASE_6_POINT_1.length + PHASE_6_POINT_2.length + PHASE_3_POINT_3.length) * MEDIUM_TYPE_SPEED);
    }

    function appendSection7() {
        $("#activity-div").append(`
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="seventh-check-1">
                <div class="inner-text">
                    <span id="fs7-1"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="seventh-check-2">
                <div class="inner-text">
                    <span id="fs7-2"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="seventh-check-3">
                <div class="inner-text">
                    <span id="fs7-3"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="seventh-check-4">
                <div class="inner-text">
                    <span id="fs7-4"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="seventh-check-5">
                <div class="inner-text">
                    <span id="fs7-5"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="seventh-check-6">
                <div class="inner-text">
                    <span id="fs7-6"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="seventh-check-7">
                <div class="inner-text">
                    <span id="fs7-7"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="seventh-check-8">
                <div class="inner-text">
                    <span id="fs7-8"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="seventh-check-9">
                <div class="inner-text">
                    <span id="fs7-9"></span>
                </div>
            </div>
        `);
        typingPromises(PHASE_7_POINT_1, MEDIUM_TYPE_SPEED).forEach(promise => {
            promise.then(portion => {
                document.querySelector('#fs7-1').innerHTML = portion;
            });
        });
        setTimeout(function(){
            typingPromises(PHASE_7_POINT_2, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs7-2').innerHTML = portion;
                });
            });
        }, PHASE_7_POINT_1.length * MEDIUM_TYPE_SPEED);

        setTimeout(function(){
            typingPromises(PHASE_7_POINT_3, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs7-3').innerHTML = portion;
                });
            });
        }, (PHASE_7_POINT_1.length + PHASE_7_POINT_2.length) * MEDIUM_TYPE_SPEED);

        setTimeout(function(){
            typingPromises(PHASE_7_POINT_4, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs7-4').innerHTML = portion;
                });
            });
        }, (PHASE_7_POINT_1.length + PHASE_7_POINT_2.length + PHASE_7_POINT_3.length) * MEDIUM_TYPE_SPEED);

        setTimeout(function(){
            typingPromises(PHASE_7_POINT_5, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs7-5').innerHTML = portion;
                });
            });
        }, (PHASE_7_POINT_1.length + PHASE_7_POINT_2.length + PHASE_7_POINT_3.length+ PHASE_7_POINT_4.length) * MEDIUM_TYPE_SPEED);

        setTimeout(function(){
            typingPromises(PHASE_7_POINT_6, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs7-6').innerHTML = portion;
                });
            });
            typingPromises(PHASE_7_POINT_7, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs7-7').innerHTML = portion;
                });
            });
            typingPromises(PHASE_7_POINT_8, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs7-8').innerHTML = portion;
                });
            });
            typingPromises(PHASE_7_POINT_9, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs7-9').innerHTML = portion;
                });
            });
        }, (PHASE_7_POINT_1.length + PHASE_7_POINT_2.length + PHASE_7_POINT_3.length + PHASE_7_POINT_4.length+ PHASE_7_POINT_5.length) * MEDIUM_TYPE_SPEED);
    }

    function appendSection8() {
        $("#activity-div").append(`
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="eighth-check-1">
                <div class="inner-text">
                    <span id="fs8-1"></span>
                </div>
            </div>
        `);
        typingPromises(PHASE_8_POINT_1, MEDIUM_TYPE_SPEED).forEach(promise => {
            promise.then(portion => {
                document.querySelector('#fs8-1').innerHTML = portion;
            });
        });
    }

    function appendSection9() {
        $("#activity-div").append(`
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="ninth-check-1">
                <div class="inner-text">
                    <span id="fs9-1"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="ninth-check-2">
                <div class="inner-text">
                    <span id="fs9-2"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="ninth-check-3">
                <div class="inner-text">
                    <span id="fs9-3"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="ninth-check-4">
                <div class="inner-text">
                    <span id="fs9-4"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="ninth-check-5">
                <div class="inner-text">
                    <span id="fs9-5"></span>
                </div>
            </div>
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="ninth-check-6">
                <div class="inner-text">
                    <span id="fs9-6"></span>
                </div>
            </div>
        `);
        typingPromises(PHASE_9_POINT_1, MEDIUM_TYPE_SPEED).forEach(promise => {
            promise.then(portion => {
                document.querySelector('#fs9-1').innerHTML = portion;
            });
        });
        setTimeout(function(){
            typingPromises(PHASE_9_POINT_2, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs9-2').innerHTML = portion;
                });
            });
        }, PHASE_9_POINT_1.length * MEDIUM_TYPE_SPEED);

        setTimeout(function(){
            typingPromises(PHASE_9_POINT_3, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs9-3').innerHTML = portion;
                });
            });
        }, (PHASE_9_POINT_1.length + PHASE_9_POINT_2.length) * MEDIUM_TYPE_SPEED);
        setTimeout(function(){
            typingPromises(PHASE_9_POINT_4, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs9-4').innerHTML = portion;
                });
            });
        }, (PHASE_9_POINT_1.length + PHASE_9_POINT_2.length + PHASE_9_POINT_3.length) * MEDIUM_TYPE_SPEED);

        setTimeout(function(){


            typingPromises(PHASE_9_POINT_5, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs9-5').innerHTML = portion;
                });
            });
            typingPromises(PHASE_9_POINT_6, MEDIUM_TYPE_SPEED).forEach(promise => {
                promise.then(portion => {
                    document.querySelector('#fs9-6').innerHTML = portion;
                });
            });
        }, (PHASE_9_POINT_1.length + PHASE_9_POINT_2.length + PHASE_9_POINT_3.length + PHASE_9_POINT_4.length) * MEDIUM_TYPE_SPEED);
    }

    function appendSection10() {
        $("#activity-div").append(`
            <div class="row activity-row">
                <div class="col-1"></div>
                <img src="./img/check_box_empty.png" class="rounded d-block my-img-xsmall" alt="first-check" id="tenth-check-1">
                <div class="inner-text">
                    <span id="fs10-1"></span>
                </div>
            </div>
        `);
        typingPromises(PHASE_10_POINT_1, MEDIUM_TYPE_SPEED).forEach(promise => {
            promise.then(portion => {
                document.querySelector('#fs10-1').innerHTML = portion;
            });
        });
    }
    /**
     * END OF APPEND to ACTIVITIES
     */

    /**
     * APPEND to GUIDANCE
     */

    function appendGuidance(text) {
        $("button").hide();
        $("#output-div").empty();
        $("#guidance-div").append(`
            <div class="row guidance-row">
                <div class="inner-text-guidance">
                    <span id="guidance-text"></span>
                </div>
            </div>
        `);
        typingPromises(text, FAST_TYPE_SPEED).forEach(promise => {
            promise.then(portion => {
                document.querySelector('#guidance-text').innerHTML = portion;
            });
        });

        setTimeout(() => {
            $("#ok-button").show();
        }, text.length * FAST_TYPE_SPEED)
    }
    $("#ok-button").click(() => {
        playClick();
        appendOutput(OUTPUT_TEXT);
    });

    function appendOutput(text) {
        $("#output-div").append(`
            <div class="row output-row">
                <div class="inner-text-output">
                    <span id="output-text"></span>
                </div>
            </div>
        `);
        typingPromises(text, FAST_TYPE_SPEED).forEach(promise => {
            promise.then(portion => {
                document.querySelector('#output-text').innerHTML = portion;
            });
        });
    }
    /**
     * Microbox check
     */
    // section one
    $(document).on("click", "#first-check-1", ()=>{
        $("#first-check-1").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });

    $(document).on("click", "#first-check-2", ()=>{
        $("#first-check-2").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    // section two
    $(document).on("click", "#second-check-1", ()=>{
        $("#second-check-1").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });

    $(document).on("click", "#second-check-2", ()=>{
        $("#second-check-2").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#second-check-3", ()=>{
        $("#second-check-3").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    // section three
    $(document).on("click", "#third-check-1", ()=>{
        $("#third-check-1").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#third-check-2", ()=>{
        $("#third-check-2").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#third-check-3", ()=>{
        $("#third-check-3").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#third-check-4", ()=>{
        $("#third-check-4").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#third-check-5", ()=>{
        $("#third-check-5").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#third-check-6", ()=>{
        $("#third-check-6").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#third-check-7", ()=>{
        $("#third-check-7").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#third-check-8", ()=>{
        $("#third-check-8").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    // section four
    $(document).on("click", "#fourth-check-1", ()=>{
        $("#fourth-check-1").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fourth-check-2", ()=>{
        $("#fourth-check-2").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fourth-check-3", ()=>{
        $("#fourth-check-3").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fourth-check-4", ()=>{
        $("#fourth-check-4").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fourth-check-5", ()=>{
        $("#fourth-check-5").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fourth-check-6", ()=>{
        $("#fourth-check-6").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fourth-check-7", ()=>{
        $("#fourth-check-7").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fourth-check-8", ()=>{
        $("#fourth-check-8").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fourth-check-9", ()=>{
        $("#fourth-check-9").attr('src', './img/check_box_filled.png');
        playClick();
    });
    $(document).on("click", "#fourth-check-10", ()=>{
        $("#fourth-check-10").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fourth-check-11", ()=>{
        $("#fourth-check-11").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fourth-check-12", ()=>{
        $("#fourth-check-12").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fourth-check-13", ()=>{
        $("#fourth-check-13").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fourth-check-14", ()=>{
        $("#fourth-check-14").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fourth-check-15", ()=>{
        $("#fourth-check-15").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fourth-check-16", ()=>{
        $("#fourth-check-16").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fourth-check-17", ()=>{
        $("#fourth-check-17").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    // section 5
    $(document).on("click", "#fifth-check-1", ()=>{
        $("#fifth-check-1").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#fifth-check-2", ()=>{
        $("#fifth-check-2").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    // section 6
    $(document).on("click", "#sixth-check-1", ()=>{
        $("#sixth-check-1").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#sixth-check-2", ()=>{
        $("#sixth-check-2").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#sixth-check-3", ()=>{
        $("#sixth-check-3").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#sixth-check-4", ()=>{
        $("#sixth-check-4").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#sixth-check-5", ()=>{
        $("#sixth-check-5").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });

    // section seven
    $(document).on("click", "#seventh-check-1", ()=>{
        $("#seventh-check-1").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#seventh-check-2", ()=>{
        $("#seventh-check-2").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#seventh-check-3", ()=>{
        $("#seventh-check-3").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#seventh-check-4", ()=>{
        $("#seventh-check-4").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#seventh-check-5", ()=>{
        $("#seventh-check-5").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#seventh-check-6", ()=>{
        $("#seventh-check-6").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#seventh-check-7", ()=>{
        $("#seventh-check-7").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#seventh-check-8", ()=>{
        $("#seventh-check-8").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#seventh-check-9", ()=>{
        $("#seventh-check-9").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    // section eight
    $(document).on("click", "#eighth-check-1", ()=>{
        $("#eighth-check-1").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    // section nine
    $(document).on("click", "#ninth-check-1", ()=>{
        $("#ninth-check-1").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#ninth-check-2", ()=>{
        $("#ninth-check-2").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#ninth-check-3", ()=>{
        $("#ninth-check-3").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#ninth-check-4", ()=>{
        $("#ninth-check-4").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#ninth-check-5", ()=>{
        $("#ninth-check-5").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    $(document).on("click", "#ninth-check-6", ()=>{
        $("#ninth-check-6").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });
    // section ten
    $(document).on("click", "#tenth-check-1", ()=>{
        $("#tenth-check-1").attr('src', './img/check_box_filled.png');
        playClick();
        appendGuidance(GUIDANCE_TEXT);
    });

    function playClick() {
        let audio = $("#mysoundclip")[0];
        audio.play();
    }




});
