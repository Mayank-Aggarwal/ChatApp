'use strict';

module.exports = function(){
	return {
		SignUpValidation : (req,res,next) => {
			req.checkBody('username','Username is required').notEmpty();
			req.checkBody('username','Username must not be less than 5').isLength({min : 5});
			req.checkBody('email','Email is required').notEmpty();
			req.checkBody('email','Email is required').isEmail();
			req.checkBody('username','Password is required').notEmpty();
			req.checkBody('password','Password must not be less than 7').isLength({min : 7});  
			
			req.getValidationResult()
				.then((result) => {
					const errors = result.array();
					const messages = [];
					errors.forEach((errors) => {
						messages.push(error.msg);
					});
					
					req.flash('error',messages);
					res.redirect('/signup');
				})
				.catch((err) => {
					return next();
				})
		},
		
		LoginValidation : (req,res,next) => {
			req.checkBody('username','Username is required').notEmpty();
			req.checkBody('username','Username must not be less than 5').isLength({min : 5});
			req.checkBody('email','Email is required').notEmpty();
			req.checkBody('email','Email is required').isEmail();
			req.checkBody('username','Password is required').notEmpty();
			req.checkBody('password','Password must not be less than 7').isLength({min : 7});  
			
			req.getValidationResult()
				.then((result) => {
					const errors = result.array();
					const messages = [];
					errors.forEach((errors) => {
						messages.push(error.msg);
					});
					
					req.flash('error',messages);
					res.redirect('/');
				})
				.catch((err) => {
					return next();
				})
		}
	}
}