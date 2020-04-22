# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import pickle

dataset = pd.read_csv('GroceriesBuyingTrend.csv')


X = dataset.iloc[:, :6]

y = dataset.iloc[:, -1]

#Splitting Training and Test Set
#Since we have a very small dataset, we will train our model with all availabe data.

from sklearn.linear_model import LogisticRegression
classifier = LogisticRegression(random_state=0,penalty='l2',solver='lbfgs')

#Fitting model with trainig data
classifier.fit(X, y)

# Saving model to disk
pickle.dump(classifier, open('model_panic.pkl','wb'))

# Loading model to compare the results
model = pickle.load(open('model_panic.pkl','rb'))
print(model.predict([[1,1,1,1,1,1]]))