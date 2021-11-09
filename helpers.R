library(shiny)

#' @param day_num Integer/String. Number of day in workshop (1,2,3,...)
#' @param date String. Actual date (January 9th)
#' @param items String. Vector of items
#'
create_day <- function(day_num, date, items) {
	svg_check <- HTML('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>')

	day_html <- div(class="max-w-4xl mx-auto px-8 lg:px-0 grid grid-cols-1 md:grid-cols-4 gap-x-8",
		div(class="col-span-1 mb-6",
			h3(class="text-md text-gray-400 pt-1", glue::glue("Day {day_num}")),
			p(class="text-2xl text-ruby-800 font-medium", date)
		),
		# List
		div(class="pl-2 lg:pl-0 md:py-8 col-span-1 md:col-span-3",
			shiny::tags$ol(
				 tagList(lapply(items, \(item) {
				 	shiny::tags$li(class="flex mb-4",
						svg_check,
						item
					)}
				))
			)
		)
	)

	clipr::write_clip(as.character(day_html))

	day_html
}


# Causal Inference

create_day(
	1, "January 14th",
	c("Hidden curriculum and data minding", "Potential Outcomes", "Randomization inference and selection bias", "Coding Lab", "Randomization Inference", "Directed acyclic graphs", "Coding Lab"))

create_day(
	2, "January 15th",
	c("Sharp Regression Discontinuity", "Coding Lab"))

create_day(
	3, "January 21st",
	c("Instrumental Variables", "Coding Lab"))

create_day(
	4, "January 22nd",
	c("Difference-in-Differences","Coding Lab"))

# Diff-in-diff

create_day(
	1, "February 18th",
	c("Potential Outcomes Review", "2x2 with Covariates", "Coding Lab", "Bias of TWFE under
differential timing", "Weighted group-time aggregation: CS", "Coding Lab"))

create_day(
	2, "February 19th",
	c("Weighted group-time ATT: event studies: SA", "Turning on and off: dCdH", "Coding Lab", "Robust efficient imputation estimators", "Continuous treatments", "Coding Lab"))

create_day(
	3, "February 25th",
	c("Synthetic Control", "Matrix completion with nuclear norm regularization", "Coding Lab", "Synthetic difference-in-differences", "Augmented synthetic control", "Coding Lab"))
