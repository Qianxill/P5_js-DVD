import pandas as pd
import numpy as np


pd_reader = pd.read_csv("./assets/workload_all.csv")


pd_name_time_sum = pd.read_csv("./assets/workload_all.csv",header=0, usecols=["Date","name","Time"])


E_map = {'low':0, 'normal':1, 'high':2, 0:0}
F_map={'sleepy':0, 'tired':1, 'normal':2, 'energetic':3, 0:0}

pd_time_EFC = pd.read_csv("./assets/workload_all.csv",header=0, usecols=["Date","name","Efficiency","Fatigue","Comment"])
pd_time_EFC['Date'] = pd.to_datetime(pd_time_EFC['Date'])
pd_time_EFC.sort_values(by='Date', inplace = True)

pd_time_EFC.fillna(0, inplace=True)

pd_qx_EFC=pd_time_EFC[pd_time_EFC['name'].isin(['Qianxi'])]
pd_qx_EFC['Efficiency'] = pd_qx_EFC['Efficiency'].map(E_map)
pd_qx_EFC['Fatigue'] = pd_qx_EFC['Fatigue'].map(F_map)

pd_qx_EFC.to_csv('./comments/qx_EFC.csv',index=False)

pd_dg_EFC=pd_time_EFC[pd_time_EFC['name'].isin(['Dong'])]
pd_dg_EFC['Efficiency'] = pd_dg_EFC['Efficiency'].map(E_map)
pd_dg_EFC['Fatigue'] = pd_dg_EFC['Fatigue'].map(F_map)
pd_dg_EFC.to_csv('./comments/dg_EFC.csv',index=False)

pd_mt_EFC=pd_time_EFC[pd_time_EFC['name'].isin(['Mengting'])]
pd_mt_EFC['Efficiency'] = pd_mt_EFC['Efficiency'].map(E_map)
pd_mt_EFC['Fatigue'] = pd_mt_EFC['Fatigue'].map(F_map)
pd_mt_EFC.to_csv('./comments/mt_EFC.csv',index=False)

pd_sy_EFC=pd_time_EFC[pd_time_EFC['name'].isin(['Siyi'])]
pd_sy_EFC['Efficiency'] = pd_sy_EFC['Efficiency'].map(E_map)
pd_sy_EFC['Fatigue'] = pd_sy_EFC['Fatigue'].map(F_map)
pd_sy_EFC.to_csv('./comments/sy_EFC.csv',index=False)

pd_zy_EFC=pd_time_EFC[pd_time_EFC['name'].isin(['Zhouyang'])]
pd_zy_EFC['Efficiency'] = pd_zy_EFC['Efficiency'].map(E_map)
pd_zy_EFC['Fatigue'] = pd_zy_EFC['Fatigue'].map(F_map)
pd_zy_EFC.to_csv('./comments/zy_EFC.csv',index=False)










pd_name_time_sum = pd_name_time_sum.groupby(['Date','name'])['Time'].sum().reset_index()
pd_name_time_sum['Date'] = pd.to_datetime(pd_name_time_sum['Date'])
pd_name_time_sum.sort_values(by='Date', inplace = True)
#print(pd_name_time_sum.dtypes)
pd_name_time_sum.to_csv('./assets/workload_sum.csv',index=False)


pd_qx_time_sum=pd_name_time_sum[pd_name_time_sum['name'].isin(['Qianxi'])]
pd_qx_time_sum.to_csv('./assets/qx_sum.csv',index=False)

pd_dg_time_sum=pd_name_time_sum[pd_name_time_sum['name'].isin(['Dong'])]
pd_dg_time_sum.to_csv('./assets/dg_sum.csv',index=False)

pd_mt_time_sum=pd_name_time_sum[pd_name_time_sum['name'].isin(['Mengting'])]
pd_mt_time_sum.to_csv('./assets/mt_sum.csv',index=False)

pd_sy_time_sum=pd_name_time_sum[pd_name_time_sum['name'].isin(['Siyi'])]
pd_sy_time_sum.to_csv('./assets/sy_sum.csv',index=False)

pd_zy_time_sum=pd_name_time_sum[pd_name_time_sum['name'].isin(['Zhouyang'])]
pd_zy_time_sum.to_csv('./assets/zy_sum.csv',index=False)






#pd_name_sum['Time'] = pd_name_sum.groupby(['Date','name'])['Time'].transform('sum')

#date1 = pd_name_sum.groupby('Date', as_index=False).sum()
#date1 = date1[['Date','Time']].sort_values(by=['Date'], ascending=True)



#print(date1)

#print(pd_reader)

