$(document).ready(function() {

	$('.opt-tire-label').mouseover(function() {
            var opt_tire_label_val = $(this).attr('id');
            $('#tire-img-' + opt_tire_label_val).show();
            $('#tire-img-default').hide();
            
//            var positionY = '0';
//            var width = $( window ).width();

//            if ( 'largeur' == opt_tire_label_val ) {
//                if ( width <= 1200 ) {
//                    positionY = '-106px';
//                } else {
//                    positionY = '-106px';
//                }
//            }
//            if ( 'hauteur' == opt_tire_label_val ) {
//                $('.full_pic').css('background-position', '0 -204.5px');
//            }
//            if ( 'diametre' == opt_tire_label_val ) {
//                $('.full_pic').css('background-position', '0 -303px');
//            }
//            if ( 'charge' == opt_tire_label_val ) {
//                $('.full_pic').css('background-position', '0 -402px');
//            }
//            if ( 'vitesse' == opt_tire_label_val ) {
//                $('.full_pic').css('background-position', '0 -501px');
//            }
//            
//            $('.full_pic').css('background-position', '0 ' + positionY);
	});
	$('.opt-tire-label').mouseout(function() {
		$('.tire-img').hide();
		$('#tire-img-default').show();
	});
	$('.opt-tire-label2').mouseover(function() {
		var opt_tire_label_val = $(this).attr('id');
		$('#tire-img2-' + opt_tire_label_val).show();
		$('#tire-img2-default').hide();

	});
	$('.panel-menu').click(function() {
		var panel_class = $(this).attr('panel-class');
		$('.panel-body').hide();
		$('.panel-menu').removeClass('menu-active');
		$(this).addClass('menu-active');
		$('.'+ panel_class).show();


	});
	$('.opt-tire-label2').mouseout(function() {
		$('.tire-img2').hide();
		$('#tire-img2-default').show();
	});

	$('.opt-tire-label3').mouseover(function() {
		var opt_tire_label_val = $(this).attr('id');
		$('#tire-img3-' + opt_tire_label_val).show();
		$('#tire-img3-default').hide();

	});
	$('.opt-tire-label3').mouseout(function() {
		$('.tire-img3').hide();
		$('#tire-img3-default').show();
	});
	$('.ms-selectall').click(function() { 
		var checkbox_class = "";
		var checkbox_id = "";

		checkbox_class = $(this).attr('class');
		checkbox_id = checkbox_class.replace(" ms-selectall", "");

		if ( $("#"+checkbox_id).prop('checked') == true ) {
			$("#"+checkbox_id).prop( "checked", false );
		} else if ( $("#"+checkbox_id).prop('checked') == false ){
			$("#"+checkbox_id).prop( "checked", true );
		}

		var ms_opt_checked = false;
		$(this).parent().parent().children().find('.ms-selectall-checkbox').each( function() { 
			ms_opt_checked = true;
			if ( $(this).prop('checked') == false ) {
				ms_opt_checked = false;
				return false;
			} else {
				ms_opt_checked = true;
			}
		});
		$(this).parent().parent().siblings('.slct-checkbox').prop( "checked", ms_opt_checked );
	});

	$('.slct-checkbox').click(function() { 
		$(this).siblings('.global').trigger('click', [ true ]);
	});

	$('.ms-selectall-checkbox').change(function() { 
		var checkbox_id = $(this).attr('id');
		$( '.' + checkbox_id ).trigger( 'click' );

		var ms_opt_checked = false;
		$(this).parent().parent().children().find('.ms-selectall-checkbox').each( function() { 
			if ( $(this).prop('checked') == false ) {
				ms_opt_checked = false;
				return false;
			} else {
				ms_opt_checked = true;
			}
		});
		$(this).parent().parent().siblings('.slct-checkbox').prop( "checked", ms_opt_checked );
	});
	
	$('.ms-opt').click(function() { 
		if ( $(this).prop('checked') == false ) {
			$(this).parent().parent().parent().siblings("input").prop( "checked", false );
			$(this).parent().parent().parent().parent().parent().siblings(".slct-checkbox").prop( "checked", false );
		} else { 
			var ms_opt_checked = false;
			$( $(this).parent().parent().siblings("li").children().find('.ms-opt') ).each(function( index ) {
				if ( $(this).prop('checked') == false ) {
					ms_opt_checked = false;
					return false;
				} else {
					ms_opt_checked = true;
				}
			});
			$(this).parent().parent().parent().siblings("input").prop( "checked", ms_opt_checked );

			var ms_opt_global_checked = false;
			$(this).parent().parent().parent().parent().parent().children().find('.ms-opt').each( function() { 				
				if ( $(this).prop('checked') == false ) {
					ms_opt_global_checked = false;
					return false;
				} else {
					ms_opt_global_checked = true;
				}
			});
			$(this).parent().parent().parent().parent().parent().siblings('.slct-checkbox').prop( "checked", ms_opt_global_checked );
		}
	});
	
	$('.global').click(function( event, checkbox ) { 
		var checkbox_status = false;
		if ( $(this).siblings("ul").children().find('.ms-opt:first-child').prop('checked') === true ) {
			checkbox_status = true;
		}
		$( $(this).siblings("ul").children().find('.ms-selectall-checkbox') ).each(function( index ) {
			$(this).prop( "checked", checkbox_status );
		});

		if ( ! checkbox ) {
			var slct_checkbox = $(this).siblings('.slct-checkbox');
			if ( slct_checkbox.prop('checked') == false ) {
				slct_checkbox.prop( "checked", true );
			} else {
				slct_checkbox.prop( "checked", false );
			}
		}
	});


	$('.ms-options-wrap').click( function(e) { 

		var target_class = $(e.target).attr('class');

		if ( target_class == 'ms-options-wrap' || target_class == 'ms-options-wrap check-visible' || target_class == 'ms-button' ) {

			$('.styled_select2').each(function( index ) {
				$(this).removeClass('slct-border-visible');
			});
			$('.ms-options').each(function( index ) {
				$(this).removeClass('border-visible');
			});
			if ( $(this).hasClass('check-visible') ) {
				$("head").append($('<style>.slct2:after { border-bottom: none; }</style>'));
				$("head").append($('<style>.slct3:after { border-bottom: none; }</style>'));
				$(this).removeClass('check-visible');
			} else {
				$(this).parent().addClass('slct-border-visible');
				$(this).parent().find('.ms-options').addClass('border-visible');

				var width = $( window ).width();
				if ( width > 1024 && width < 480 ) {				
					if ( $(this).parent().hasClass('slct1') ) {
						$("head").append($('<style>.slct2:after { border-bottom: 1px solid #aaa; } .slct3:after { border-bottom: 1px solid #aaa; }</style>'));
					}
					if ( $(this).parent().hasClass('slct2') ) {
						$("head").append($('<style>.slct2:after { border-bottom: none; } .slct3:after { border-bottom: 1px solid #aaa; }</style>'));
					}
					if ( $(this).parent().hasClass('slct3') ) {
						$("head").append($('<style>.slct3:after { border-bottom: none; }</style>'));
					}
				} else {
					if ( $(this).parent().hasClass('slct1') ) {
						$("head").append($('<style>.slct2:after { border-bottom: none; } .slct3:after { border-bottom: none; } .styled_select2:after { top: 71px; }</style>'));
					}
					if ( $(this).parent().hasClass('slct2') ) {
						$("head").append($('<style>.slct2:after { border-bottom: 1px solid #fff; } </style>'));
					}
					if ( $(this).parent().hasClass('slct3') ) {
						$("head").append($('<style>.slct3:after { border-bottom: 1px solid #fff; } </style>'));
					}
				}

				$('.ms-options-wrap').each(function( index ) {
					$(this).removeClass('check-visible');
				});
				$(this).addClass('check-visible');
			}
		}
	});


	$("body").click(function(e) {
        if ( $(e.target).parents(".styled_select2").size() ) { 

        } else { 
			$('.styled_select2').each(function( index ) {
				$(this).removeClass('slct-border-visible');
			});
			$("head").append($('<style>.slct2:after { border-bottom: 1px solid #fff; }</style>'));
			$("head").append($('<style>.slct3:after { border-bottom: 1px solid #fff; }</style>'));
        }

    });

});


function show_this(type){
	if(type==1){
		$(".one_panel_div").css("border","1px solid #ddd");
		$(".two_panel_div").attr("style","border:0px");
		$(".one_panel").css("display","none");
		$(".two_panel").css("display","block");
	}else if(type==0){
		$(".one_panel_div").css("border","0px");
		$(".two_panel_div").css("border","1px solid #ddd");
		$(".one_panel").css("display","block");
		$(".two_panel").css("display","none");
	}
}