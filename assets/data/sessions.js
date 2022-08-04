import { ref } from "vue"

export default ref([
	// Causal Inference I (Scott Cunningham)
	{
		id: "ci_I",
		title: "Causal Inference I",
		type: "Mixtape Session",
		gradientClass: "sm:ci-gradient",
		buttonGradient: "ci-gradient",
		about: `Causal Inference Part I kickstarts a new 4-day series on design-based causal inference series.  It covers the foundations of causal inference grounded in a counterfactual theory of causality built on the Neyman-Rubin model of potential outcomes. It will also cover randomization inference, independence, matching, regression discontinuity and instrumental variables.  We will review the theory behind each of these designs in detail with the aim being comprehension, competency and confidence.  Each day is 8 hours with 15 minute breaks on the hour plus an hour for lunch.  To help accomplish this, we will hold ongoing discussions via Discourse, work through assignments and exercises together, and have detailed walk-throughs of code in R and Stata.  This is the prequel to the Part II course that covers difference-in-differences and synthetic control.`,
		dates: [
			{
				date: "September 3rd",
				url: "ci_I_sept3",
				eventbrite: "https://www.eventbrite.com/e/377927570537",
				calendar: [
					{
						day: "September 3rd",
						time: "8am-5pm CST",
						topics: [
							"Introduction to causal inference",
							"Potential outcomes and counterfactuals",
							"Randomization, selection bias",
							"Randomization inference ",
						],
					},
					{
						day: "September 4th",
						time: "8am-5pm CST",
						topics: [
							"Introduction to causal graphs",
							"Propensity score matching",
							"Nearest neighbor covariate matching",
						],
					},
					{
						day: "September 10th",
						time: "8am-5pm CST",
						topics: [
							"Instrumental variables",
							"Canonical estimators (2SLS, Wald)",
							"Intuition and assumptions ",
							"Weak instruments and 2SLS bias",
							"Heterogenous treatment effects",
							"Local average treatment effect",
						],
					},
					{
						day: "September 11th",
						time: "8am-5pm CST",
						topics: [
							"Introduction to regression discontinuity ",
							"Regression discontinuity identification",
							"Nonlinearities and estimation ",
							"Nonparametric estimation ",
							"General tips (data visualization, density tests, etc)",
						],
					},
				],
			},
		],
		instructor: [
			{
				name: "Prof. Scott Cunningham",
				url: "http://scunning.com/",
				about: `<a href="https://www.scunning.com" class="text-violet-red-500 hover:text-violet-red-600">Scott Cunningham</a> is a professor of economics at Baylor University. Scott studies a number of topics including mental healthcare, sex work, abortion and drug policy. He loves his family, friends, colleagues, students, HBO, Ted Lasso, Keanu Reeves, Mister Rogers, my kittens Betty and Veronica, causal inference, Mac Miller and Kanye West.`,
				reviews: [
					"I can’t endorse these workshops highly enough. The ambitious syllabus is covered in great detail, interlaced with tangible examples and useful economic history lessons in addition to personal anecdotes. Anybody interested in gaining a deeper understanding in the science (art?) of causal inference and its recent developments will not regret investing a few hours (and a few dollars) in Scott’s workshops",
					"The course is taught in such a pedagogical manor, and communicates a lot of complex material in a short amount of time. It is a huge bonus how attentive Scott was to our questions and comments. This course would be super useful anyone working with causal inference (or hoping to) whether you are advanced or just a beginner. Only nice words to say - such an amazing week. I kind of want to do it again already.",
					"Scott's ability to explain fairly complex methods and concepts in an intuitive way, plus his complete openness and availability to answer questions as they come around, and his commitment to democratize causal inference (truly admirable and very rare within economics) make this a wonderful workshop that I would highly recommend to anyone wanting to learn more about the topic and methods.",
				],
				img: `scott_cunningham.png`,
			},
		],
	},
	// Causal Inference II (Scott Cunningham)
	{
		id: "ci_II",
		title: "Causal Inference II",
		type: "Mixtape Session",
		gradientClass: "sm:did-gradient",
		buttonGradient: "did-gradient",
		about: `Causal inference Part II is a 4-day workshop in design based causal inference series.  It will cover three contemporary research designs in causal inference -- difference-in-differences, synthetic control and matching/weighting methods -- as well as introduce participants to causal graphs developed by Judea Pearl and others.  Each day is 8 hours with 15 minute breaks on the hour plus an hour for lunch.  We will review the theory behind each design, go into detail on the intuition of the estimation strategies and identification itself, as well as explore code in R and Stata and applications using these methods.  The goal as always is that participants leave the workshop with competency and confidence. This class will be a sequel to the 4-day workshop on Causal Inference Part I.`,
		dates: [
			{
				date: "August 20th",
				url: "ci_II_aug20",
				eventbrite: "https://www.eventbrite.com/e/295829643427",
				calendar: [
					{
						day: "August 20th",
						time: "8am-5pm CST",
						topics: [
							"Introduction to DID",
							"Parallel trends and the DID equation",
							"OLS, TWFE, Triple difference",
							"Synthetic control (Abadie, Diamond and Hainmueller 2010)",
						],
					},
					{
						day: "August 21st",
						time: "8am-5pm CST",
						topics: [
							"DID with Covariates (Sant'Anna and Zhao 2020; Abadie 2005)",
							"Differential timing and Bacon decomposition (Goodman-Bacon 2021)",
							"Aggregating group-time average treatment effects (Callaway and SantAnna 2020)",
						],
					},
					{
						day: "August 27th",
						time: "8am-5pm CST",
						topics: [
							"Analyzing event studies (Sun and Abraham 2020)",
							"Imputation Estimators (Gardner 2021 and Borusyal et al 2021)",
						],
					},
					{
						day: "August 28th",
						time: "8am-5pm CST",
						topics: [
							"Time-varying Covariates and Imputation (Caetano et al 2021)",
							"Continuous Treatment (Callaway, Goodman-Bacon and Sant'Anna 2020)",
						],
					},
				],
			},
			{
				date: "October 8th",
				url: "ci_II_oct8",
				eventbrite: "https://www.eventbrite.com/e/377930469207",
				calendar: [
					{
						day: "October 8th",
						time: "8am-5pm CST",
						topics: [
							"Introduction to DID",
							"Parallel trends and the DID equation",
							"OLS, TWFE, Triple difference",
							"Synthetic control (Abadie, Diamond and Hainmueller 2010)",
						],
					},
					{
						day: "October 9th",
						time: "8am-5pm CST",
						topics: [
							"DID with Covariates (Sant'Anna and Zhao 2020; Abadie 2005)",
							"Differential timing and Bacon decomposition (Goodman-Bacon 2021)",
							"Aggregating group-time average treatment effects (Callaway and SantAnna 2020)",
						],
					},
					{
						day: "October 15th",
						time: "8am-5pm CST",
						topics: [
							"Analyzing event studies (Sun and Abraham 2020)",
							"Imputation Estimators (Gardner 2021 and Borusyal et al 2021)",
						],
					},
					{
						day: "October 16th",
						time: "8am-5pm CST",
						topics: [
							"Time-varying Covariates and Imputation (Caetano et al 2021)",
							"Continuous Treatment (Callaway, Goodman-Bacon and Sant'Anna 2020)",
						],
					},
				],
			},
		],
		instructor: [
			{
				name: "Prof. Scott Cunningham",
				url: "http://scunning.com/",
				about: `<a href="https://www.scunning.com" class="text-violet-red-500 hover:text-violet-red-600">Scott Cunningham</a> is a professor of economics at Baylor University. Scott studies a number of topics including mental healthcare, sex work, abortion and drug policy. He loves his family, friends, colleagues, students, HBO, Ted Lasso, Keanu Reeves, Mister Rogers, my kittens Betty and Veronica, causal inference, Mac Miller and Kanye West.`,
				reviews: [
					"I can’t endorse these workshops highly enough. The ambitious syllabus is covered in great detail, interlaced with tangible examples and useful economic history lessons in addition to personal anecdotes. Anybody interested in gaining a deeper understanding in the science (art?) of causal inference and its recent developments will not regret investing a few hours (and a few dollars) in Scott’s workshops",
					"The course is taught in such a pedagogical manor, and communicates a lot of complex material in a short amount of time. It is a huge bonus how attentive Scott was to our questions and comments. This course would be super useful anyone working with causal inference (or hoping to) whether you are advanced or just a beginner. Only nice words to say - such an amazing week. I kind of want to do it again already.",
					"Scott's ability to explain fairly complex methods and concepts in an intuitive way, plus his complete openness and availability to answer questions as they come around, and his commitment to democratize causal inference (truly admirable and very rare within economics) make this a wonderful workshop that I would highly recommend to anyone wanting to learn more about the topic and methods.",
				],
				img: `scott_cunningham.png`,
			},
		],
	},
	// Doing Applied Research (Daniel Rees and Mark Anderson)
	{
		id: "applied",
		title: "Doing Applied Research",
		type: "Mixtape Track",
		gradientClass: "sm:applied-gradient",
		buttonGradient: "applied-gradient",
		about: `This course is intended to be a practical guide for early career economists doing applied research. The nuts and bolts of writing, publishing, and service to the profession are covered in two half-day sessions, each lasting roughly four hours (including short breaks). We begin by providing tips on selecting a research topic, doing a comprehensive literature search, and “pitching” your results. Next, we go through the publication process from choosing a journal to effectively responding to the comments of editors and reviewers. We wrap up by discussing networking, refereeing for economics journals, and getting the most out of conferences and departmental seminars. Each half-day session ends with an optional 30-minute Q&A about the academic job market.`,
		dates: [
			{
				date: "August 12th",
				url: "applied_aug12",
				eventbrite: "https://eventbrite.com/e/324348654557",
				calendar: [
					{
						day: "August 12th",
						time: "11am-3pm EST",
						topics: [
							"Starting Your Research Project",
							"Practical Tips for Writing Your Applied Paper",
							"Grad Student Job Market Q&A",
						],
					},
					{
						day: "August 13th",
						time: "11am-3pm EST",
						topics: [
							"The Publication Process",
							"Refereeing",
							"Conferences and Networking",
							"Ask the editor!",
							"Grad Student Job Market Q&A",
						],
					},
				],
			},
		],
		instructor: [
			{
				name: "Prof. Daniel Rees",
				url: "https://danielrees.weebly.com/",
				about: `<a href="https://danielrees.weebly.com/" class="text-violet-red-500 hover:text-violet-red-600">Daniel Rees</a> professor in the department of economics at the Universidad Carlos III de Madrid. He serves as a coeditor at the <i>American Journal of Health Economics</i> and at the <i>Journal of Policy Analysis and Management</i>. He was a professor in the Department of Economics at the University of Colorado Denver from 1993-2021 and Editor-in-Chief of the <i>Economics of Education Review</i> from 2014-2019. <br/><br/> Dr. Rees is currently studying the mortality transition at the turn of the 20th century, the relationship between hospital desegregation and the Black-White infant mortality gap, and the long-term effects of smoking on health.  His research has appeared in the <i>American Economic Journal: Applied Economics, <i>Economic Journal</i>, <i>Journal of Development Economics</i>, <i>Journal of Economic Literature</i>, <i>Journal of Human Resources</i>, <i>Journal of Political Economy</i>, and <i>Review of Economics and Statistics</i>.`,
				img: `dan_rees.jpg`,
			},
			{
				name: "Prof. D. Mark Anderson",
				url: "http://www.dmarkanderson.com/",
				about: `<a href="http://www.dmarkanderson.com/" class="text-violet-red-500 hover:text-violet-red-600">D. Mark Anderson</a> is an Associate Professor in the Department of Agricultural Economics & Economics at Montana State University, a research associate at the National Bureau of Economic Research, and a co-editor of <i>Economic Inquiry</i>.  He received his Ph.D. in economics from the University of Washington in 2011. <br/><br/> Dr. Anderson is an applied microeconomist with research interests in health and economic history.  His research has appeared in the <i>American Economic Journal: Applied Economics</i>, <i>Economic Journal</i>, <i>Journal of Economic Literature</i>, <i>Journal of Law and Economics</i>, <i>Journal of Urban Economics</i>, <i>Journal of Political Economy</i>, and <i>Review of Economics and Statistics</i>.
`,
				img: `mark_anderson.jpg`,
			},
		],
	},
	// Shift-Share IV (Peter Hull)
	{
		id: "shift_share",
		title: "Shift-Share IV",
		type: "Mixtape Track",
		gradientClass: "sm:shift-share-gradient",
		buttonGradient: "shift-share-gradient",
		about: `Shift-Share Instrumental Variables (SSIV) are used to address endogeneity and selection challenges in many economic settings. This half-day workshop will introduce the basics of SSIV and cover the recent literature on its econometric foundations. Special focus will be paid on the different assumptions underlying the "exogenous shares" and "exogenous shocks" approaches to SSIV identification, and their practical implications. We will also cover a more general class of instrumental variable strategies combining exogenous shocks and non-random exposure. Group programming exercises will be used to illustrate various theoretical concepts in real-world applications.`,
		dates: [
			{
				date: "Nov 2nd",
				url: "shift_share_nov2",
				eventbrite: "https://www.eventbrite.com/e/378096997297",
				calendar: [
					{
						day: "Nov 2nd",
						time: "6pm-9pm EST",
						topics: [
							"Introducing Shift-Share IV: Recent Applications",
							"The 'Exogenous Shares' Approach (Goldsmith-Pinkham et al. 2020)",
							"The 'Exogenous Shocks' Approach (Borusyak et al., 2022)",
						],
					},
          {
						day: "Nov 3rd",
						time: "6pm-9pm EST",
						topics: [
							"The 'Exogenous Shocks' Approach (Borusyak et al., 2022)",
							"Practical Implications from Exogenous Shares vs. Shocks",
							"Beyond SSIV: Non-Random Exposure to Exogenous Shocks (Borusyak and Hull, 2022)",
							"Coding Lab",
						],
					},
				],
			},
		],
		instructor: [
			{
				name: "Prof. Peter Hull",
				url: "http://peterhull.net/",
				about: `<a href="https://peterhull.net/" class="text-violet-red-500 hover:text-violet-red-600">Peter Hull</a> is the Groos Family Assistant Professor of Economics at Brown Univeristy and a Faculty Research Fellow at the National Bureau of Economic Research. He has published papers on topics in applied econometrics, education, healthcare, and criminal justice, in outlets such as the American Economic Review, the Quarterly Journal of Economics, the Review of Economic Studies, and the New England Journal of Medicine. His research is focused on developing and applying new instrumental variable methods to measure the quality of institutions, such as schools or hospitals, as well as discrimination and bias in human and algorithmic decision-making. Prior to Brown, Professor Hull taught at the Kenneth C. Griffin Department of Economics at the University of Chicago and worked at Microsoft Research and the Federal Reserve Bank of New York. He earned his PhD in economics from MIT in 2017, under 2021 Nobel Laureate Josh Angrist.`,
				reviews: [
					"Using your Saturday to get a world-class tutorial in instrumental variables that would cost many thousands of dollars (or hours of RA work) to get otherwise is a pretty good deal. Peter is super clear and clearly prepared really well for the workshop, with great materials and interesting simulations and applications.",
					"The course is very organized and gives a comprehensive overview of IV designs and its recent advances. Peter is very kind and seems to be truly interested in making students understand the lessons. I strongly recommend the IV Mixtape session for anyone interested in enhancing knowledge about IV by getting to know practical applications and learning by coding.",
					"This workshop was expertly run. The exposure to a really amazing instructor in Peter Hull was valuable in and of itself. The lectures were well prepared, lots of helpful readings and lecture notes were provided. I came away having learning more about IV and feel more confident about how IV works, in theory and practice.",
				],
				img: `peter_hull.png`,
			},
		],
	},
	// Instrumental Variables (Peter Hull)
	{
		id: "iv",
		title: "Instrumental Variables",
		type: "Mixtape Track",
		gradientClass: "sm:iv-gradient",
		buttonGradient: "iv-gradient",
		about: `Instrumental variables (IV) is a powerful tool for leveraging external ("exogenous") variation to estimate the causal effects of otherwise confounded ("endogenous") variables. This two-day workshop will introduce the basics of IV through different practical examples, formalize the requirements of a valid and powerful IV, and discuss the mechanics of the two-stage least squares (2SLS) estimator. Special focus will be paid on interpreting linear IV under heterogeneous treatment effects and recent advances in judge leniency designs. The course will include substantial group programming exercises, where different IV techniques will be illustrated in real-world applications.`,
		dates: [
			{
				date: "September 27th",
				url: "iv_sept27",
				eventbrite: "https://www.eventbrite.com/e/378094429617/",
				calendar: [
					{
						day: "September 27th",
						time: "6pm-9pm EST",
						topics: [
							"Regression Review and Regression Endogeneity",
							"Introduction to IV",
							"Understanding Instrument Validity; 2SLS Mechanics; Applications",
							"Coding Lab",
						],
					},
					{
						day: "September 28th",
						time: "6pm-9pm EST",
						topics: [
							"Heterogeneous Treatment Effects; Characterizing Compliers; MTEs",
							"Judge Leniency Designs",
							"Coding Lab",
						],
					},
				],
			},
		],
		instructor: [
			{
				name: "Prof. Peter Hull",
				url: "http://peterhull.net/",
				about: `<a href="https://peterhull.net/" class="text-violet-red-500 hover:text-violet-red-600">Peter Hull</a> is the Groos Family Assistant Professor of Economics at Brown Univeristy and a Faculty Research Fellow at the National Bureau of Economic Research. He has published papers on topics in applied econometrics, education, healthcare, and criminal justice, in outlets such as the American Economic Review, the Quarterly Journal of Economics, the Review of Economic Studies, and the New England Journal of Medicine. His research is focused on developing and applying new instrumental variable methods to measure the quality of institutions, such as schools or hospitals, as well as discrimination and bias in human and algorithmic decision-making. Prior to Brown, Professor Hull taught at the Kenneth C. Griffin Department of Economics at the University of Chicago and worked at Microsoft Research and the Federal Reserve Bank of New York. He earned his PhD in economics from MIT in 2017, under 2021 Nobel Laureate Josh Angrist.`,
				reviews: [
					"Using your Saturday to get a world-class tutorial in instrumental variables that would cost many thousands of dollars (or hours of RA work) to get otherwise is a pretty good deal. Peter is super clear and clearly prepared really well for the workshop, with great materials and interesting simulations and applications.",
					"The course is very organized and gives a comprehensive overview of IV designs and its recent advances. Peter is very kind and seems to be truly interested in making students understand the lessons. I strongly recommend the IV Mixtape session for anyone interested in enhancing knowledge about IV by getting to know practical applications and learning by coding.",
					"This workshop was expertly run. The exposure to a really amazing instructor in Peter Hull was valuable in and of itself. The lectures were well prepared, lots of helpful readings and lecture notes were provided. I came away having learning more about IV and feel more confident about how IV works, in theory and practice.",
				],
				img: `peter_hull.png`,
			},
		],
	},
	// Advanced DID (Jonathan Roth)
	{
		id: "advanced_did",
		title: "Advanced DID",
		type: "Mixtape Track",
		gradientClass: "sm:advanced-did-gradient",
		buttonGradient: "advanced-did-gradient",
		about: `This one-day workshop will cover advanced topics from the recent difference-in-differences literature. One question of particular focus will be, <i>"what should I do if I'm not 100% sure about the validity of the parallel trends assumption?"</i> We will cover a variety of relaxations to the parallel trends assumption, and new tools for power calculations and sensitivity analysis. The workshop will focus not just on the theory, but also on practical implementation in statistical software such as R and Stata. `,
		dates: [
			{
				date: "June 24th",
				url: "advanced_did_jun24",
				eventbrite: "https://www.eventbrite.com/e/250526751257",
				calendar: [
					{
						day: "June 24th",
						time: "9am-5pm EST",
						topics: ["Advanced Difference-in-Differences"],
					},
				],
			},
		],
		instructor: [
			{
				name: "Prof. Jonathan Roth",
				url: "https://jonathandroth.github.io/",
				about: `<a href="https://jonathandroth.github.io/" class="text-violet-red-500 hover:text-violet-red-600">Jonathan Roth</a> is an assistant professor in the economics department at Brown University. His primary research interests are in econometrics, with a focus on causal inference. He has also worked on topics in labor economics, machine learning, and algorithmic fairness. He was previously a senior researcher in the Office of the Chief Economist at Microsoft. He received my PhD in economics in 2020 from Harvard, where He was awarded the David A. Wells prize for best dissertation. He obtained a BA summa cum laude in mathematics and economics from the University of Pennsylvania.`,
				img: `jonathan_roth.jpeg`,
			},
		],
	},
])
