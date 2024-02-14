define("TaskRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "TaskRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "2c14e203-cc83-4480-a6ed-b58f2991da3a",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_oxzpvb0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_oxzpvb0_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "calculator-button-icon",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "TaskCalculateAveragePriceProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RealtyRecordIdParameter"
						}
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TaskRealtyTitle",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.TaskName",
					"control": "$TaskName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TaskRealtyPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_TaskColumn2_7pec879",
					"labelPosition": "auto",
					"control": "$PDS_TaskColumn2_7pec879",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TaskRealtyArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_TaskRealtyArea_fbwq94n",
					"labelPosition": "auto",
					"control": "$PDS_TaskRealtyArea_fbwq94n"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TaskCommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_TaskRealtyOfferTypeTaskCommissionPercent",
					"control": "$PDS_TaskRealtyOfferTypeTaskCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TaskCommissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_TaskCommissionUSD_laihzrn",
					"labelPosition": "auto",
					"control": "$PDS_TaskCommissionUSD_laihzrn",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TaskRealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_TaskRealtyType_f5ybwg0",
					"labelPosition": "auto",
					"control": "$PDS_TaskRealtyType_f5ybwg0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_f0v81eq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_f0v81eq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "TaskRealtyType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TaskRealtyOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_TaskRealtyOfferType_01nlvg2",
					"labelPosition": "auto",
					"control": "$PDS_TaskRealtyOfferType_01nlvg2",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_so5ajj2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_so5ajj2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "TaskRealtyOfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TaskRealtyComment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_TaskRealtyComment_z1qkwqu",
					"labelPosition": "auto",
					"control": "$PDS_TaskRealtyComment_z1qkwqu",
					"multiline": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_n4hgv19",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_n4hgv19_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_dlm3nuq",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_n4hgv19",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_s17a1m9",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_dlm3nuq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_4g0jdr8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_4g0jdr8_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "TaskRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "TaskOwner",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_s17a1m9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_80bzzi2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_80bzzi2_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_2azztyrDS"
						}
					}
				},
				"parentName": "FlexContainer_s17a1m9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_vdileul",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_vdileul_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_s17a1m9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_ue5lnna",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_ue5lnna_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_2azztyr"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_vdileul",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ktgra8o",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ktgra8o_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "TaskRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_vdileul",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_4v4pqe2",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_4v4pqe2_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_2azztyr"
					]
				},
				"parentName": "FlexContainer_s17a1m9",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_2rt031e",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_n4hgv19",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_2azztyr",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_2azztyr",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_2azztyrDS_Id",
					"columns": [
						{
							"id": "8a8224a7-da57-78e4-8077-26a9201d1c5d",
							"code": "GridDetail_2azztyrDS_TaskPotencialCustomer",
							"path": "TaskPotencialCustomer",
							"caption": "#ResourceString(GridDetail_2azztyrDS_TaskPotencialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "918dd6ab-89c2-8e4e-73f0-f4d1a8d3cd3e",
							"code": "GridDetail_2azztyrDS_TaskVisitDateTime",
							"path": "TaskVisitDateTime",
							"caption": "#ResourceString(GridDetail_2azztyrDS_TaskVisitDateTime)#",
							"dataValueType": 7,
							"width": 172
						},
						{
							"id": "4d61ee10-ab6f-8df4-c2e2-9e7750e4e6eb",
							"code": "GridDetail_2azztyrDS_TaskComment",
							"caption": "#ResourceString(GridDetail_2azztyrDS_TaskComment)#",
							"dataValueType": 28,
							"width": 162
						},
						{
							"id": "e486909d-7f91-a6e9-b5e4-a450b3f5ef6f",
							"code": "GridDetail_2azztyrDS_TaskOwner",
							"path": "TaskOwner",
							"caption": "#ResourceString(GridDetail_2azztyrDS_TaskOwner)#",
							"dataValueType": 10,
							"referenceSchemaName": "TaskRealty",
							"width": 117
						},
						{
							"id": "7f368a0e-8cf2-01ca-007b-d80e9d3fa092",
							"code": "GridDetail_2azztyrDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_2azztyrDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				},
				"parentName": "GridContainer_2rt031e",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"TaskName": {
						"modelConfig": {
							"path": "PDS.TaskRealtyTitle"
						}
					},
					"PDS_TaskColumn2_7pec879": {
						"modelConfig": {
							"path": "PDS.TaskRealtyPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "task.BBValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(PriceMustBeGreaterZero)#"
								}
							}
						}
					},
					"PDS_TaskRealtyArea_fbwq94n": {
						"modelConfig": {
							"path": "PDS.TaskRealtyArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "task.BBValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(AreaMustBeGreaterZero)#"
								}
							}
						}
					},
					"PDS_TaskRealtyType_f5ybwg0": {
						"modelConfig": {
							"path": "PDS.TaskRealtyType"
						}
					},
					"PDS_TaskRealtyOfferType_01nlvg2": {
						"modelConfig": {
							"path": "PDS.TaskRealtyOfferType"
						}
					},
					"PDS_TaskRealtyComment_z1qkwqu": {
						"modelConfig": {
							"path": "PDS.TaskRealtyComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_TaskCommissionUSD_laihzrn": {
						"modelConfig": {
							"path": "PDS.TaskCommissionUSD"
						}
					},
					"PDS_TaskRealtyOfferTypeTaskCommissionPercent": {
						"modelConfig": {
							"path": "PDS.TaskRealtyOfferTypeTaskCommissionPercent"
						}
					},
					"GridDetail_2azztyr": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_2azztyrDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "TaskPotencialCustomer"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_2azztyrDS_TaskPotencialCustomer": {
									"modelConfig": {
										"path": "GridDetail_2azztyrDS.TaskPotencialCustomer"
									}
								},
								"GridDetail_2azztyrDS_TaskVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_2azztyrDS.TaskVisitDateTime"
									}
								},
								"GridDetail_2azztyrDS_TaskComment": {
									"modelConfig": {
										"path": "GridDetail_2azztyrDS.TaskComment"
									}
								},
								"GridDetail_2azztyrDS_TaskOwner": {
									"modelConfig": {
										"path": "GridDetail_2azztyrDS.TaskOwner"
									}
								},
								"GridDetail_2azztyrDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_2azztyrDS.CreatedOn"
									}
								},
								"GridDetail_2azztyrDS_Id": {
									"modelConfig": {
										"path": "GridDetail_2azztyrDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_2azztyrDS": [
							{
								"attributePath": "TaskOwner",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "TaskRealty",
							"attributes": {
								"TaskRealtyOfferTypeTaskCommissionPercent": {
									"path": "TaskRealtyOfferType.TaskCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_2azztyrDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "TaskRealtyVisit",
							"attributes": {
								"TaskPotencialCustomer": {
									"path": "TaskPotencialCustomer"
								},
								"TaskVisitDateTime": {
									"path": "TaskVisitDateTime"
								},
								"TaskComment": {
									"path": "TaskComment"
								},
								"TaskOwner": {
									"path": "TaskOwner"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {
					if (request.attributeName === 'PDS_TaskColumn2_7pec879') {
						var price = await request.$context.PDS_TaskColumn2_7pec879;
						if (price > 50000) {
							request.$context.enableAttributeValidator('PDS_TaskRealtyComment_z1qkwqu', 'required');
						} else {
							request.$context.disableAttributeValidator('PDS_TaskRealtyComment_z1qkwqu', 'required');
						}
					}
					if (request.attributeName === 'PDS_TaskColumn2_7pec879' || 								// if price changed
					   request.attributeName === 'PDS_TaskRealtyOfferTypeTaskCommissionPercent' ) { 		// or percent changed
						var price2 = await request.$context.PDS_TaskColumn2_7pec879;
						var percent = await request.$context.PDS_TaskRealtyOfferTypeTaskCommissionPercent;
						var commission = price2 * percent / 100;
						request.$context.PDS_TaskCommissionUSD_laihzrn = commission;
					}
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"task.BBValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"task.BBValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});