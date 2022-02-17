import { ref } from 'vue';

export default ref([
    {
        id: "ci",
        title: "Causal Inference",
        gradientClass: "sm:ci-gradient", buttonGradient: "ci-gradient",
        about: `Causal inference is a specialization within economics and statistics that grew out of the labor economics tradition to evaluate the causal effects of programs. While physical randomization was widely known to yield unbiased estimates of causal effects, it was not often used in economics. A wave of new labor economists starting in the late 1970s and mid 1980s changed that as they pushed for focus on exploiting quasi random assignment in natural experiments or through imposed modeling assumptions on counterfactuals. This work in conjunction with pioneering work in econometrics led to the sharpening of such research designs as instrumental variables and difference-in-differences. This workshop will cover foundational elements of modern practices of causal inference such as the potential outcomes model as well as discuss in detail the most common designs: regression discontinuity, instrumental variables, difference in differences, comparative case studies using synthetic control and if time permitting matching. It will be accompanied by efforts to introduce students to basic practices in programming as well as good research practices more generally.`,
        to: '#',
        dates: [
            {
                date: 'January 14th',
                url: 'ci_jan14',
                eventbrite: 'https://www.eventbrite.com/e/203512500367',
                calendar: [
                    {
                        day: "January 14th",
                        time: "8am-5pm CST",
                        topics: ["Potential Outcomes", "Randomization inference and selection bias", "Coding Lab", "Randomization Inference", "Directed acyclic graphs", "Coding Lab", "Sharp Regression Discontinuity"]
                    }, 
                    {
                        day: "January 15th",
                        time: "8am-5pm CST",
                        topics: ["Sharp Regression Discontinuity (continued)", "Coding Lab", "Instrumental Variables"]
                    },
                    {
                        day: "January 21st",
                        time: "8am-5pm CST",
                        topics: ["Instrumental Variables (continued)", "Coding Lab"]
                    },
                    {
                        day: "January 22nd",
                        time: "8am-5pm CST",
                        topics: ["Difference-in-Differences", "Coding Lab"]
                    },
                    {
                        day: "January 28th",
                        time: "8am-5pm CST",
                        topics: ["Synthetic Control", "Coding Lab", "Matching", "Coding Lab"]
                    },
                ]
            },
            {
                date: 'March 26th',
                url: 'ci_mar26',
                eventbrite: 'https://www.eventbrite.com/e/219257584337',
                calendar: [
                    {
                        day: "March 26th",
                        time: "8am-5pm CST",
                        topics: ["Potential Outcomes", "Randomization inference and selection bias", "Coding Lab", "Randomization Inference", "Directed acyclic graphs", "Coding Lab", "Sharp Regression Discontinuity"]
                    }, 
                    {
                        day: "March 27th",
                        time: "8am-5pm CST",
                        topics: ["Sharp Regression Discontinuity (continued)", "Coding Lab", "Instrumental Variables"]
                    },
                    {
                        day: "April 2nd",
                        time: "8am-5pm CST",
                        topics: ["Instrumental Variables (continued)", "Coding Lab"]
                    },
                    {
                        day: "April 3rd",
                        time: "8am-5pm CST",
                        topics: ["Difference-in-Differences", "Coding Lab"]
                    },
                    {
                        day: "April 9th",
                        time: "8am-5pm CST",
                        topics: ["Synthetic Control", "Coding Lab", "Matching", "Coding Lab"]
                    },
                ]
            },
            {
                date: 'May 6th',
                url: 'ci_may6',
                eventbrite: 'https://www.eventbrite.com/e/243268280977',
                calendar: [
                    {
                        day: "May 6th",
                        time: "8am-5pm CST",
                        topics: ["Potential Outcomes", "Randomization inference and selection bias", "Coding Lab", "Randomization Inference", "Directed acyclic graphs", "Coding Lab", "Sharp Regression Discontinuity"]
                    }, 
                    {
                        day: "May 7th",
                        time: "8am-5pm CST",
                        topics: ["Sharp Regression Discontinuity (continued)", "Coding Lab", "Instrumental Variables"]
                    },
                    {
                        day: "May 8th",
                        time: "8am-5pm CST",
                        topics: ["Instrumental Variables (continued)", "Coding Lab"]
                    },
                    {
                        day: "May 14th",
                        time: "8am-5pm CST",
                        topics: ["Difference-in-Differences", "Coding Lab"]
                    },
                    {
                        day: "April 15th",
                        time: "8am-5pm CST",
                        topics: ["Synthetic Control", "Coding Lab", "Matching", "Coding Lab"]
                    },
                ]
            },
        ],
        instructor: {
            name: 'Prof. Scott Cunningham',
            url: 'http://scunning.com/',
            about: `<a href="https://www.scunning.com" class="text-violet-red-500 hover:text-violet-red-600">Scott Cunningham</a> is a professor of economics at Baylor University. Scott studies a number of topics including mental healthcare, sex work, abortion and drug policy. He loves his family, friends, colleagues, students, HBO, Ted Lasso, Keanu Reeves, Mister Rogers, my kittens Betty and Veronica, causal inference, Mac Miller and Kanye West.`,
            img: `scott_cunningham.png`
        },
    },
    {
        id: "did",
        title: "Difference-in-Differences",
        gradientClass: "sm:did-gradient", buttonGradient: "did-gradient",
        about: `The most common quasi-experimental method in the quantitative social sciences is the difference-in-differences research design. This methodology has undergone substantial updates over the last few years as econometricians and statisticians have begun investigating the historical use of panel fixed effects estimators more closely as well as devising alternative models that perform best under heterogenous treatment effects and heterogenous policy adoption. This 1-day workshop will cover the most important new theoretical papers with an aim towards intuition and implementation. It will also include substantial group programming assignments.`,
        to: '#',
        dates: [
            {
                date: 'February 18th',
                url: 'did_feb18',
                eventbrite: 'https://www.eventbrite.com/e/203527324707',
                calendar: [
                    {
                        day: "February 18th",
                        time: "8am-5pm CST",
                        topics: ["Potential Outcomes Review", "2x2 without Covariates", "2x2 with Covariates", "Coding Lab", "Bias of TWFE under differential timing", "Weighted group-time aggregation: Callaway and Sant'Anna (2020)", "Coding Lab"]
                    }, 
                    {
                        day: "February 19th",
                        time: "8am-5pm CST",
                        topics:  ["Weighted group-time ATT: event studies: Sun and Abraham (2020)", "Turning on and off: De Chaisemartin and D’haultfœille (2020)", "Coding Lab", "Robust efficient imputation estimators", "Stacking", "Coding Lab", "Spatial Difference-in-Differences: Butts (2021)"]
                    }, 
                    {
                        day: "February 25th",
                        time: "8am-5pm CST",
                        topics:  ["Synthetic Control", "Matrix completion: Athey et. al. (2021)", "Coding Lab", "Synthetic difference-in-differences: Athey et. al. (2021)", "Augmented synthetic control: Ben-Michael et al. (2021)", "Coding Lab"]
                    }, 
                ]
            },
            {
                date: 'April 15th',
                url: 'did_apr15',
                eventbrite: 'https://www.eventbrite.com/e/226368473197',
                calendar: [
                    {
                        day: "April 15th",
                        time: "8am-5pm CST",
                        topics: ["Potential Outcomes Review", "2x2 without Covariates", "2x2 with Covariates", "Coding Lab", "Bias of TWFE under differential timing", "Weighted group-time aggregation: Callaway and Sant'Anna (2020)", "Coding Lab"]
                    }, 
                    {
                        day: "April 16th",
                        time: "8am-5pm CST",
                        topics:  ["Weighted group-time ATT: event studies: Sun and Abraham (2020)", "Turning on and off: De Chaisemartin and D’haultfœille (2020)", "Coding Lab", "Robust efficient imputation estimators", "Stacking", "Coding Lab", "Spatial Difference-in-Differences: Butts (2021)"]
                    }, 
                    {
                        day: "April 17th",
                        time: "8am-5pm CST",
                        topics:  ["Synthetic Control", "Matrix completion: Athey et. al. (2021)", "Coding Lab", "Synthetic difference-in-differences: Athey et. al. (2021)", "Augmented synthetic control: Ben-Michael et al. (2021)", "Coding Lab"]
                    }, 
                ]
            },
        ],
        instructor: {
            name: 'Prof. Scott Cunningham',
            url: 'http://scunning.com/',
            about: `<a href="https://www.scunning.com" class="text-violet-red-500 hover:text-violet-red-600">Scott Cunningham</a> is a professor of economics at Baylor University. Scott studies a number of topics including mental healthcare, sex work, abortion and drug policy. He loves his family, friends, colleagues, students, HBO, Ted Lasso, Keanu Reeves, Mister Rogers, my kittens Betty and Veronica, causal inference, Mac Miller and Kanye West.`,
            img: `scott_cunningham.png`
        },
    },
    {
        id: "iv",
        title: "Instrumental Variables",
        gradientClass: "sm:iv-gradient", buttonGradient: "iv-gradient",
        about: `Instrumental variables (IV) is a powerful tool for leveraging external (“exogenous”) variation to estimate the causal effects of otherwise confounded (“endogenous”) variables. This one-day workshop will introduce the basics of IV through different practical examples, formalize the requirements of a valid and powerful IV, and discuss the mechanics of the two-stage least squares (2SLS) estimator. Special focus will be paid on interpreting linear IV under heterogeneous treatment effects and recent advances in judge leniency designs, shift-share IV, and more. The course will include substantial group programming exercises, where different IV techniques will be illustrated in real-world applications.`,
        to: '#',
        dates: [
            {
                date: 'March 12th',
                url: 'iv_mar12',
                eventbrite: 'https://www.eventbrite.com/e/226373337747',
                calendar: [
                    {
                        day: "March 12th",
                        time: "9am-6pm EST",
                        topics: ["Regression Review and Regression Endogeneity", "Introduction to IV", "Understanding Instrument Validity; 2SLS Mechanics; Applications", "Coding Lab", "Heterogeneous Treatment Effects; Characterizing Compliers; MTEs", "Judge Leniency Designs; Shift-Share IV; New IV Frontiers", "Coding Lab"]
                    }
                ]
            },
        ],
        instructor: {
            name: 'Prof. Peter Hull',
            url: 'http://peterhull.net/',
            about: `<a href="https://peterhull.net/" class="text-violet-red-500 hover:text-violet-red-600">Peter Hull</a> is the Groos Family Assistant Professor of Economics at Brown Univeristy and a Faculty Research Fellow at the National Bureau of Economic Research. He has published papers on topics in applied econometrics, education, healthcare, and criminal justice, in outlets such as the American Economic Review, the Quarterly Journal of Economics, the Review of Economic Studies, and the New England Journal of Medicine. His research is focused on developing and applying new instrumental variable methods to measure the quality of institutions, such as schools or hospitals, as well as discrimination and bias in human and algorithmic decision-making. Prior to Brown, Professor Hull taught at the Kenneth C. Griffin Department of Economics at the University of Chicago and worked at Microsoft Research and the Federal Reserve Bank of New York. He earned his PhD in economics from MIT in 2017, under 2021 Nobel Laureate Josh Angrist.`,
            img: `peter_hull.png`,
        },
    },
    {
        id: "advanced-did",
        title: "Advanced Difference-in-Differences",
        gradientClass: "sm:advanced-did-gradient", buttonGradient: "advanced-did-gradient",
        about: ``,
        to: '#',
        dates: [
            {
                date: 'June 10th',
                url: 'advanced_did_jun10',
                eventbrite: 'https://www.eventbrite.com/e/250526751257',
                calendar: [
                    {
                        day: "June 10th",
                        time: "9am-5pm EST",
                        topics: ["Advanced Difference-in-Differences"]
                    }
                ]
            },
        ],
        instructor: {
            name: 'Prof. Jonathan Roth',
            url: 'https://jonathandroth.github.io/',
            about: `<a href="https://jonathandroth.github.io/" class="text-violet-red-500 hover:text-violet-red-600">Jonathan Roth</a> is an assistant professor in the economics department at Brown University. His primary research interests are in econometrics, with a focus on causal inference. He has also worked on topics in labor economics, machine learning, and algorithmic fairness. He was previously a senior researcher in the Office of the Chief Economist at Microsoft. He received my PhD in economics in 2020 from Harvard, where He was awarded the David A. Wells prize for best dissertation. He obtained a BA summa cum laude in mathematics and economics from the University of Pennsylvania.`,
            img: `jonathan_roth.jpeg`,
        },
    }
])
